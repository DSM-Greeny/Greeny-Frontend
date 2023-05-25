import styled from "styled-components";
import PostItem from "../../item";
import { useEffect, useState } from "react";
import { dummyPosts } from "../../../../libs/constants/posts";
import { useRecoilState } from "recoil";
import { ScrollStateAtom } from "../../../../atoms/scrollState";

interface CommunityPagePostListProps {
  listRef: React.RefObject<HTMLUListElement>;
}

const CommunityPagePostList = ({ listRef }: CommunityPagePostListProps) => {
  const [scrollState, setScrollState] = useRecoilState<number>(ScrollStateAtom);
  const [scrollable, setScrollable] = useState<boolean>(false);
  useEffect(() => listRef.current?.scroll(0, scrollState), []);
  useEffect(
    () =>
      setScrollable(
        listRef.current?.scrollHeight! > listRef.current?.clientHeight!
      ),
    [listRef]
  );
  return (
    <Wrapper
      ref={listRef}
      scrollable={`${scrollable}`}
      onScroll={(e) => setScrollState(e.currentTarget.scrollTop)}
    >
      {dummyPosts.map((v) => (
        <PostItem
          key={`post${v.id}`}
          id={v.id}
          title={v.title}
          writer={v.writer}
          writeDate={v.writeDate}
          preview={v.preview}
        />
      ))}
    </Wrapper>
  );
};

export default CommunityPagePostList;

interface WrapperProps {
  scrollable: "true" | "false";
}

const Wrapper = styled.ul<WrapperProps>`
  margin-top: 16px;
  margin-bottom: 16px;

  ${(props) =>
    props.scrollable === "true"
      ? `padding-right: 8px;

width: 345px;`
      : "width: 353px;"}
  height: calc(100vh - 198px);

  display: flex;
  flex-direction: column;
  gap: 8px;

  overflow-y: auto;
`;
