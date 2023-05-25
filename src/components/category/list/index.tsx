import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import CategoryItem from "../item";
import { dummyCategories } from "../../../libs/constants/categories";
import { useRecoilState, useSetRecoilState } from "recoil";
import { CategoryStateAtomType } from "../../../atoms/categoryState";
import { CategoryStateAtom } from "../../../atoms/categoryState";
import { ScrollStateAtom } from "../../../atoms/scrollState";

interface CategoryListProps {
  listRef: React.RefObject<HTMLUListElement>;
}

const CategoryList = ({ listRef }: CategoryListProps) => {
  const setScrollState = useSetRecoilState<number>(ScrollStateAtom);
  const [categoryState, setCategoryState] =
    useRecoilState<CategoryStateAtomType>(CategoryStateAtom);
  const [scrollable, setScrollable] = useState<boolean>(false);
  const categoryRef = useRef<HTMLUListElement>(null);
  useEffect(
    () =>
      setScrollable(
        categoryRef.current?.scrollWidth! > categoryRef.current?.clientWidth!
      ),
    [categoryRef]
  );
  return (
    <Wrapper ref={categoryRef} scrollable={`${scrollable}`}>
      {dummyCategories.map((v, i) => (
        <CategoryItem
          key={`category${i}`}
          category={v}
          active={v === categoryState.category}
          onClick={() => {
            if (v !== categoryState.category) {
              setCategoryState((prevState) => {
                return { ...prevState, category: v };
              });
              listRef.current!.scrollTop = 0;
              setScrollState(0);
            }
          }}
        />
      ))}
    </Wrapper>
  );
};

export default CategoryList;

interface WrapperProps {
  scrollable: "true" | "false";
}

const Wrapper = styled.ul<WrapperProps>`
  ${(props) => props.scrollable === "true" && "padding-bottom: 8px;"}

  width: 90vw;

  display: flex;
  gap: 8px;

  white-space: nowrap;

  overflow-x: auto;

  .active {
    background-color: ${({ theme }) => theme.colors.main};

    button {
      color: ${({ theme }) => theme.colors.background1};
    }
  }
`;
