import styled from "styled-components";
import { UserCard } from "../../components/userCard";
import { MyPagePostList } from "../../components/post/list/myPage";
import { MyPageMenu } from "../../components/menu/myPage";

export const MyPage = () => {
  return (
    <Wrapper>
      <h1>마이페이지</h1>
      <UserCard />
      <MyPagePostList />
      <MyPageMenu>
        <a
          href="https://github.com/DSM-Greeny"
          target="_blank"
          rel="noopener noreferer nofollow"
        >
          오픈소스 라이센스
        </a>
        <hr />
        <button
          type="button"
          onClick={() => {
            (window as any).webkit.messageHandlers.logout.postMessage({
              message: "logout",
            });
          }}
        >
          로그아웃
        </button>
      </MyPageMenu>
      <MyPageMenu>
        <button className="red" type="button">
          회원탈퇴
        </button>
      </MyPageMenu>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding-left: 5vw;
  padding-right: 5vw;
  margin-top: 16px;
  margin-bottom: 14px;

  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  h1 {
    width: 90vw;
  }
`;
