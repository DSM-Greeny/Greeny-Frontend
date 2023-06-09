import styled from "styled-components";
import UserItem from "../../components/userItem";
import MyPagePostList from "../../components/post/list/myPage";
import MyPageMenu from "../../components/menu/myPage";
import { dummyUser } from "../../libs/constants/user";
import { sendBridge } from "../../libs/apis/bridge";
import { useRecoilValue } from "recoil";
import { UserAgentStateAtom } from "../../atoms/userAgentState";

const MyPage = () => {
  const userAgentState = useRecoilValue<"" | "Android" | "iOS">(
    UserAgentStateAtom
  );
  return (
    <Wrapper>
      <h1>마이페이지</h1>
      <UserItem
        profile={dummyUser.profile}
        nickName={dummyUser.nickName}
        joinDate={dummyUser.joinDate}
      />
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
            console.log("HELLO");
            sendBridge("logout", { message: "logout" }, userAgentState);
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

export default MyPage;

const Wrapper = styled.main`
  padding-left: 5vw;
  padding-right: 5vw;
  margin-top: 16px;

  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  h1 {
    width: 90vw;
  }
`;
