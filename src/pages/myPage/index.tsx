import styled from "styled-components";
import UserItem from "../../components/userItem";
import MyPagePostList from "../../components/myPagePostList";
import MyPageMenu from "../../components/myPageMenu";

const MyPage = () => {
  return (
    <Wrapper>
      <h1>마이페이지</h1>
      <UserItem
        profile={
          "https://media.licdn.com/dms/image/C5603AQHn7sXWtEONuw/profile-displayphoto-shrink_800_800/0/1646651779662?e=2147483647&v=beta&t=b0zaEOjuALozuYbQLqOOGYOM0Mf4aVLFjMh5EWcwaY8"
        }
        nickName="김대희"
        joinDate={"2023-04-30"}
      />
      <MyPagePostList />
      <MyPageMenu>
        <a href="https://github.com/DSM-Greeny">오픈소스 라이센스</a>
        <hr />
        <button type="button">로그아웃</button>
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
  margin-top: 16px;

  width: 100vw;

  display: flex;
  flex-flow: column wrap;
  align-items: center;
  gap: 8px;

  > h1 {
    width: 345px;

    font-size: 24px;
    font-weight: bold;
  }
`;
