import styled from "styled-components";
import { PlaceType } from "../../../types/place";
import { useEffect } from "react";
import { SearchStateAtom } from "../../../atoms/searchState";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  SelectedStateAtom,
  SelectedStateAtomType,
} from "../../../atoms/selectedState";
import { PlaceStateAtom } from "../../../atoms/placeState";
import {
  ScrollStateAtom,
  ScrollStateAtomType,
} from "../../../atoms/scrollState";

interface PlaceListProps {
  listRef: React.RefObject<HTMLUListElement>;
}

export const PlaceList = ({ listRef }: PlaceListProps) => {
  const placeState = useRecoilValue<PlaceType[]>(PlaceStateAtom);
  const searchState = useRecoilValue<string>(SearchStateAtom);
  const setSelectedState =
    useSetRecoilState<SelectedStateAtomType>(SelectedStateAtom);
  const [scrollState, setScrollState] =
    useRecoilState<ScrollStateAtomType>(ScrollStateAtom);
  const isSearchStateSet = searchState !== "";
  useEffect(
    () =>
      scrollState.page === "place"
        ? listRef.current?.scroll(0, scrollState.position)
        : setScrollState({ page: "place", position: 0 }),
    []
  );
  return (
    <Wrapper
      ref={listRef}
      onScroll={(e) =>
        setScrollState({ page: "place", position: e.currentTarget.scrollTop })
      }
    >
      {isSearchStateSet
        ? placeState
            .filter(
              (v) =>
                v.place_name.includes(searchState) ||
                v.address_name.includes(searchState)
            )
            .map((v, i, o) => (
              <li key={`place${i}`}>
                <button
                  type="button"
                  aria-label="장소 상세보기"
                  onClick={() =>
                    setSelectedState({
                      id: v.id,
                      place_name: v.place_name,
                      x: v.x,
                      y: v.y,
                    })
                  }
                >
                  <p>{v.place_name}</p>
                  <span>{v.address_name}</span>
                </button>
                {i < o.length - 1 && <hr />}
              </li>
            ))
        : placeState.map((v, i) => (
            <li key={`place${i}`}>
              <button
                type="button"
                aria-label="장소 상세보기"
                onClick={() =>
                  setSelectedState({
                    id: v.id,
                    place_name: v.place_name,
                    x: v.x,
                    y: v.y,
                  })
                }
              >
                <p>{v.place_name}</p>
                <span>{v.address_name}</span>
              </button>
              {i < placeState.length - 1 && <hr />}
            </li>
          ))}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  width: 90vw;
  height: calc(100vh - 529px);

  overflow-y: scroll;

  ${({ theme }) => theme.commons.boxShadow}

  padding: 0px;

  li {
    width: 100%;

    button {
      padding: 16px;
      padding-top: 12px;
      padding-bottom: 12px;

      width: 100%;
      min-height: 32px;

      display: flex;
      justify-content: space-between;
      align-items: center;

      p {
        font-size: 16px;
      }

      span {
        margin-left: 8px;

        text-align: end;
      }
    }

    hr {
      margin-left: 16px;
      margin-right: 16px;

      width: calc(100% - 32px);

      border: 1px solid ${({ theme }) => theme.colors.background2};
    }
  }
`;
