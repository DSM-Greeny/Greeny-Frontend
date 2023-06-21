import styled from "styled-components";
import { EditImg } from "../../assets/images";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { UserStateAtom, UserStateAtomType } from "../../atoms/userState";
import { ModalStateAtom, ModalStateAtomType } from "../../atoms/modalState";
import { EditProfile } from "../modal/editProfile";

export const UserCard = () => {
  const setModalState = useSetRecoilState<ModalStateAtomType>(ModalStateAtom);
  const userState = useRecoilValue<UserStateAtomType>(UserStateAtom);
  return (
    <Wrapper>
      <figure>
        <picture>
          <img
            src={userState.profile}
            alt="프로필 사진"
            width="60"
            height="60"
          />
        </picture>
      </figure>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setModalState(<EditProfile />);
          }}
        >
          <h2>{userState.nickName}</h2>
          <button type="submit" aria-label="프로필 수정하기">
            <picture>
              <source type="image/svg+xml" srcSet={EditImg} />
              <img alt="수정 펜" width="12" height="12" />
            </picture>
          </button>
        </form>
        <span>
          {`가입한 지 ${Math.floor(
            (new Date().getTime() - Date.parse(userState.joinDate)) /
              1000 /
              60 /
              60 /
              24
          )}일째`}
        </span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  width: 90vw;
  height: 80px;

  display: flex;
  align-items: center;

  ${({ theme }) => theme.commons.boxShadow};

  padding: 8px;

  > figure {
    margin-right: 16px;

    picture img {
      width: 60px;
      height: 60px;

      object-fit: cover;
    }
  }

  > div {
    width: calc(100% - 84px);

    display: flex;
    flex-direction: column;

    form {
      width: 100%;

      display: flex;

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
