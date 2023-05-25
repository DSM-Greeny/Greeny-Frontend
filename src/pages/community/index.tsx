import styled from "styled-components";
import CommunityPageMenu from "../../components/menu/community";

const CommunityPage = () => {
  return (
    <Wrapper>
      <h1>친환경 공지사항</h1>
      <CommunityPageMenu />
    </Wrapper>
  );
};

export default CommunityPage;

const Wrapper = styled.main`
  margin-top: 16px;

  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  h1 {
    width: 345px;
  }
`;
