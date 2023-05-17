import styled from "styled-components";
import PostItem from "../postItem";
import { dummyPosts } from "../../libs/constants/dummyPosts";

const MyPagePostList = () => {
  return (
    <Wrapper>
      <h2>작성한 게시글</h2>
      <ul>
        {dummyPosts.map((v) => (
          <PostItem
            key={`post${v.id}`}
            title={v.title}
            writeDate={v.writeDate}
            preview={v.preview}
          />
        ))}
      </ul>
    </Wrapper>
  );
};

export default MyPagePostList;

const Wrapper = styled.article`
  width: 345px;
  height: 252px;

  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.commons.boxShadow};

  h2 {
    font-size: 12px;
    font-weight: 500;
  }

  ul {
    margin-top: 8px;

    width: 100%;
    height: 216px;

    overflow-y: scroll;

    li {
      margin-bottom: 8px;
    }

    li:last-of-type {
      margin-bottom: 0;
    }
  }
`;
