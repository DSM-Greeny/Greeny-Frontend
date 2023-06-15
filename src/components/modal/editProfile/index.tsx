import { useRecoilState, useSetRecoilState } from "recoil";
import { styled } from "styled-components";
import { UserStateAtom, UserStateAtomType } from "../../../atoms/userState";
import { readFile } from "../../../libs/constants/readFile";
import { ModalInput } from "../input";
import { useState } from "react";
import { ModalButton } from "../button";
import { ModalStateAtom, ModalStateAtomType } from "../../../atoms/modalState";

export const EditProfile = () => {
  const setModalState = useSetRecoilState<ModalStateAtomType>(ModalStateAtom);
  const [userState, setUserState] =
    useRecoilState<UserStateAtomType>(UserStateAtom);
  const [inputState, setInputState] = useState<UserStateAtomType>({
    joinDate: userState.joinDate,
    nickName: "",
    profile: userState.profile,
    email: "",
  });
  const changeProfile = (newProfile: string) =>
    setInputState((prevState) => ({ ...prevState, profile: newProfile }));
  return (
    <Wrapper
      onSubmit={(e) => {
        e.preventDefault();
        if (inputState.nickName === "")
          setUserState((prevState) => ({
            ...inputState,
            nickName: prevState.nickName,
          }));
        else setUserState(inputState);
        setModalState(undefined);
      }}
    >
      <label htmlFor="profileInput">
        <figure>
          <picture>
            <img src={inputState.profile} alt="" />
          </picture>
          <figcaption>프로필 사진 변경하기</figcaption>
        </figure>
        <input
          aria-hidden
          id="profileInput"
          type="file"
          accept="image/*"
          onChange={(e) => readFile(e.currentTarget, changeProfile)}
        />
      </label>
      <ModalInput
        placeholder="새로운 닉네임을 입력해 주세요."
        inputState={inputState.nickName}
        setInputState={(newNickname: string) =>
          setInputState((prevState) => ({
            ...prevState,
            nickName: newNickname,
          }))
        }
      />
      <ModalInput
        placeholder="변경할 이메일을 입력해 주세요."
        inputState={inputState.email}
        setInputState={(newEmail: string) =>
          setInputState((prevState) => ({ ...prevState, email: newEmail }))
        }
      />
      <ModalButton labelText="변경하기" />
    </Wrapper>
  );
};

const Wrapper = styled.form`
  padding: 0 8px;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    position: relative;

    margin-top: 24px;

    width: 128px;

    figure {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;

      img {
        width: 128px;
        height: 128px;

        border-radius: 50%;
      }

      figcaption {
        margin-top: 8px;

        color: ${({ theme }) => theme.colors.background5};
        font-size: ${({ theme }) => theme.fontSizes.description};
        font-weight: 400;
      }
    }

    input {
      position: fixed;
      top: 16px;

      width: 128px;
      height: 128px;

      visibility: hidden;
    }
  }

  > input:first-of-type {
    margin-top: 48px;
  }
`;
