import styled from "styled-components";
import PostItem from "../../item";
import { dummyPosts } from "../../../../libs/constants/posts";
import { useEffect, useRef, useState } from "react";

const MyPagePostList = () => {
  const [scrollable, setScrollable] = useState<boolean>(false);
  const listRef = useRef<HTMLUListElement>(null);
  useEffect(
    () =>
      setScrollable(
        listRef.current?.scrollHeight! > listRef.current?.clientHeight!
      ),
    [listRef]
  );
  return (
    <Wrapper scrollable={`${scrollable}`}>
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

interface IWrapperProps {
  scrollable: "true" | "false";
}

const Wrapper = styled.article<IWrapperProps>`
  width: 345px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  ${({ theme }) => theme.commons.boxShadow};

  h2 {
    font-size: ${({ theme }) => theme.fontSizes.subText};
    font-weight: 400;
  }

  ul {
    ${(props) =>
      props.scrollable === "true"
        ? `padding-right: 8px;

width: 100%;`
        : "width: calc(100% + 8px);"}

    height: 202px;

    overflow-y: auto;
    scroll-snap-type: y mandatory;

    li {
      margin-bottom: 8px;

      scroll-snap-align: start;
    }

    li:last-of-type {
      margin-bottom: 0;
    }
  }
`;
