import styled from "styled-components";
import { PostLoadResponseType } from "../../../types/post";
import { Link } from "react-router-dom";

const PostItem = ({
  id,
  title,
  writer,
  writeDate,
  preview,
}: PostLoadResponseType) => {
  return (
    <Wrapper>
      <Link to={`${id}`}>
        <div>
          <h3>{title}</h3>
          <p>{preview}</p>
        </div>
        <span>{`${writer ? `작성자 : ${writer} | ` : ""}${writeDate}`}</span>
      </Link>
    </Wrapper>
  );
};

export default PostItem;

const Wrapper = styled.li`
  width: 100%;

  a {
    width: 100%;
    height: 62px;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 4px;

    div {
      width: 100%;

      p {
        margin-top: 4px;

        ${({ theme }) => theme.commons.ellipsis}
      }
    }
  }
`;
