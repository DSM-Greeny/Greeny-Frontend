import styled from "styled-components";
import { SearchImg } from "../../assets/images";
import { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { SearchStateAtom } from "../../atoms/searchState";
import { ScrollStateAtom } from "../../atoms/scrollState";

interface SearchInputProps {
  listRef: React.RefObject<HTMLUListElement>;
}

const SearchInput = ({ listRef }: SearchInputProps) => {
  const setScrollState = useSetRecoilState<number>(ScrollStateAtom);
  const [searchState, setSearchState] = useRecoilState<string>(SearchStateAtom);
  const [inputState, setInputState] = useState<string>(searchState);
  return (
    <Wrapper
      onSubmit={(e) => {
        e.preventDefault();
        listRef.current!.scrollTop = 0;
        setScrollState(0);
        setSearchState(inputState);
      }}
    >
      <input
        placeholder="검색어를 입력해주세요."
        value={inputState}
        onChange={(e) => setInputState(e.currentTarget.value)}
      />
      <button type="submit">
        <picture>
          <source type="image/webp" srcSet={SearchImg} />
          <img alt="돋보기" width="16" height="16" />
        </picture>
      </button>
    </Wrapper>
  );
};

export default SearchInput;

const Wrapper = styled.form`
  width: 90vw;
  min-height: 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ theme }) => theme.commons.boxShadow}

  padding: 8px;
  padding-left: 16px;
  padding-right: 16px;

  input {
    width: calc(100% - 24px);

    color: ${({ theme }) => theme.colors.background6};
    font-size: ${({ theme }) => theme.fontSizes.subText};
    font-weight: 400;
  }

  input::placeholder {
    color: ${({ theme }) => theme.colors.background5};
  }
`;
