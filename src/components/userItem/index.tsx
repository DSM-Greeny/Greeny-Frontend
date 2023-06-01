import styled from "styled-components";
import { EditImg } from "../../assets/images";
import { UserLoadResponseType } from "../../types/user";
import { useState } from "react";
import { dummyUser } from "../../libs/constants/user";

const UserItem = ({ profile, nickName, joinDate }: UserLoadResponseType) => {
  const [inputState, setInputState] = useState<string>(dummyUser.nickName);
  const [editState, setEditState] = useState<boolean>(false);
  const isInputActive = editState === true;
  return (
    <Wrapper>
      <figure>
        <picture>
          <img src={profile} alt="프로필 사진" width="60" height="60" />
        </picture>
      </figure>
      <div>
        <div>
          {isInputActive ? (
            <input
              type="text"
              autoFocus={true}
              placeholder="새로운 별명"
              value={inputState}
              onChange={(e) => setInputState(e.currentTarget.value)}
            />
          ) : (
            <h2>{nickName}</h2>
          )}
          <button
            type="button"
            aria-label="별명 수정하기"
            onClick={() => setEditState(!editState)}
          >
            <picture>
              <source type="image/webp" srcSet={EditImg} />
              <img alt="수정 펜" width="12" height="12" />
            </picture>
          </button>
        </div>
        <span>
          {`가입한 지 ${Math.floor(
            (new Date().getTime() - Date.parse(joinDate)) / 1000 / 60 / 60 / 24
          )}일째`}
        </span>
      </div>
    </Wrapper>
  );
};

export default UserItem;

const Wrapper = styled.article`
  width: 90vw;
  height: 80px;

  display: flex;
  align-items: center;

  ${({ theme }) => theme.commons.boxShadow};

  padding: 8px;

  > figure {
    margin-right: 16px;
  }

  > div {
    width: calc(100% - 84px);

    display: flex;
    flex-direction: column;

    div {
      width: 100%;

      display: flex;
      justify-content: space-between;

      input {
        width: 100%;
        height: calc(100% - 1px);

        color: ${({ theme }) => theme.colors.background5};
        font-size: ${({ theme }) => theme.fontSizes.subTitle};
        font-weight: 700;

        border-bottom: 1px solid ${({ theme }) => theme.colors.background4};
      }

      button {
        margin-left: 8px;
      }
    }

    span {
      margin-top: 4px;
    }
  }
`;
