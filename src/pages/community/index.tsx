import styled from "styled-components";
import { CommunityPageMenu } from "../../components/menu/community";
import { ToggleMenu } from "../../components/toggleMenu";
import { useNavigate } from "react-router-dom";
import { WriteImg } from "../../assets/images";

export const CommunityPage = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <h1>친환경 공지사항</h1>
      <CommunityPageMenu />
      <ToggleMenu type="community">
        <li>
          <button
            aria-label="게시글 추가"
            type="button"
            onClick={() => {
              navigate("/community/create");
            }}
          >
            <figure>
              <picture>
                <source type="image/svg+xml" srcSet={WriteImg} />
                <img alt="" width="24" height="24" />
              </picture>
              <figcaption>게시글 추가</figcaption>
            </figure>
          </button>
        </li>
      </ToggleMenu>
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

  h1 {
    width: 90vw;
  }
`;
