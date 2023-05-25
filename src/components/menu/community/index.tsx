import styled from "styled-components";
import SearchInput from "../../searchInput";
import CategoryList from "../../category/list";
import CommunityPagePostList from "../../post/list/community";
import { useRef } from "react";

const CommunityPageMenu = () => {
  const listRef = useRef<HTMLUListElement>(null);
  return (
    <Wrapper>
      <SearchInput listRef={listRef} />
      <CategoryList listRef={listRef} />
      <CommunityPagePostList listRef={listRef} />
    </Wrapper>
  );
};

export default CommunityPageMenu;

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;
