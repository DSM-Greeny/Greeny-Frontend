import styled from "styled-components";
import { PostLoadResponseType } from "../../../types/post";
import { useRecoilValue } from "recoil";
import { UserAgentStateAtom } from "../../../atoms/userAgentState";
import { sendBridge } from "../../../libs/apis/bridge";

export const PostItem = ({
  id,
  title,
  writer,
  writeDate,
  preview,
}: PostLoadResponseType) => {
  const userAgentState = useRecoilValue<"Android" | "iOS" | "">(
    UserAgentStateAtom
  );
  return (
    <Wrapper>
      <button
        type="button"
        onClick={() => {
          console.log(id);
          sendBridge("navigate", { id: `${id}` }, userAgentState);
        }}
      >
        <div>
          <h3>{title}</h3>
          <p>{preview}</p>
        </div>
        <span>{`${writer ? `작성자 : ${writer} | ` : ""}${writeDate}`}</span>
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  width: 100%;

  button {
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
