import styled from "styled-components";
import PostItem from "../../item";
import { dummyPosts } from "../../../../libs/constants/posts";
import { useRef } from "react";

const MyPagePostList = () => {
  const listRef = useRef<HTMLUListElement>(null);
  return (
    <Wrapper>
      <h2>작성한 게시글</h2>
      <ul ref={listRef}>
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
  width: 90vw;

  ${({ theme }) => theme.commons.boxShadow};

  h2 {
    font-size: ${({ theme }) => theme.fontSizes.subText};
    font-weight: 400;
  }

  ul {
    margin-top: 8px;

    width: 100%;
    height: 202px;

    display: flex;
    flex-direction: column;
    gap: 8px;

    overflow-y: auto;
    scroll-snap-type: y mandatory;

    li {
      scroll-snap-align: start;
    }
  }
`;
