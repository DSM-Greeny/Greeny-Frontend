import styled from "styled-components";
import { useRef } from "react";
import { SearchInput } from "../../searchInput";
import { CategoryList } from "../../category/list";
import { CommunityPagePostList } from "../../post/list/community";

export const CommunityPageMenu = () => {
  const listRef = useRef<HTMLUListElement>(null);
  return (
    <Wrapper>
      <SearchInput listRef={listRef} />
      <CategoryList listRef={listRef} />
      <CommunityPagePostList listRef={listRef} />
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  ul {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  ul::-webkit-scrollbar {
    display: none;
  }
`;
