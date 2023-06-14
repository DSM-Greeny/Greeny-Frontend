import styled from "styled-components";
import { PlaceType } from "../../types/place";
import { useRecoilValue } from "recoil";
import {
  SelectedStateAtom,
  SelectedStateAtomType,
} from "../../atoms/selectedState";
import { PlaceStateAtom } from "../../atoms/placeState";
import { Map } from "../../components/map";
import { PlaceDetail } from "../../components/place/detail";
import { MapPageMenu } from "../../components/menu/mapPage";

export const MapPage = () => {
  const selectedState =
    useRecoilValue<SelectedStateAtomType>(SelectedStateAtom);
  const placeState = useRecoilValue<PlaceType[]>(PlaceStateAtom);
  const isSelectedSet = selectedState.id !== 0;
  return (
    <Wrapper>
      <Map />
      {isSelectedSet ? (
        <PlaceDetail
          place={placeState.filter((v) => v.id == selectedState.id)[0]}
        />
      ) : (
        <MapPageMenu />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding-left: 5vw;
  padding-right: 5vw;
  margin-top: 16px;

  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;
