import { useRef } from "react";
import { styled } from "styled-components";
import SearchInput from "../../searchInput";
import PlaceList from "../../place/list";

const MapPageMenu = () => {
  const listRef = useRef<HTMLUListElement>(null);
  return (
    <Wrapper>
      <SearchInput listRef={listRef} />
      <PlaceList listRef={listRef} />
    </Wrapper>
  );
};

export default MapPageMenu;

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;
