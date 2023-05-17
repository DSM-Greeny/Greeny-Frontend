import styled from "styled-components";
import { PostLoadResponseType } from "../../types/post";

const PostItem = ({ title, writeDate, preview }: PostLoadResponseType) => {
  return (
    <Wrapper>
      <div>
        <h3>{title}</h3>
        <p>{preview}</p>
      </div>
      <span>{writeDate}</span>
    </Wrapper>
  );
};

export default PostItem;

const Wrapper = styled.li`
  width: calc(100% - 8px);

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  div {
    width: 100%;

    h3 {
      color: ${({ theme }) => theme.colors.background6};
      font-size: 14px;
      font-weight: 600;
    }

    p {
      margin-top: 4px;

      color: ${({ theme }) => theme.colors.background6};
      font-size: 12px;
      font-weight: 400;

      ${({ theme }) => theme.commons.ellipsis}
    }
  }

  span {
    margin-top: 4px;

    color: ${({ theme }) => theme.colors.background5};
    font-size: 10px;
    font-weight: 400;
  }
`;
