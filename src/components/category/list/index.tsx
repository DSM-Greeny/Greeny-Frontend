import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import CategoryItem from "../item";
import { dummyCategories } from "../../../libs/constants/categories";
import { useRecoilState } from "recoil";
import { CategoryStateAtomType } from "../../../atoms/categoryState";
import { CategoryStateAtom } from "../../../atoms/categoryState";

const CategoryList = () => {
  const [categoryState, setCategoryState] =
    useRecoilState<CategoryStateAtomType>(CategoryStateAtom);
  const [scrollable, setScrollable] = useState<boolean>(false);
  const listRef = useRef<HTMLUListElement>(null);
  useEffect(
    () =>
      setScrollable(
        listRef.current?.scrollWidth! > listRef.current?.clientWidth!
      ),
    [listRef]
  );
  return (
    <Wrapper ref={listRef} scrollable={`${scrollable}`}>
      {dummyCategories.map((v, i) => (
        <CategoryItem
          key={`category${i}`}
          category={v}
          active={v === categoryState.category}
          onClick={() =>
            setCategoryState((prevState) => {
              return { ...prevState, category: v };
            })
          }
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

  width: 345px;

  display: flex;
  gap: 8px;

  white-space: nowrap;

  overflow-x: auto;

  .active {
    background-color: ${({ theme }) => theme.colors.main};

    color: ${({ theme }) => theme.colors.background1};
  }
`;
