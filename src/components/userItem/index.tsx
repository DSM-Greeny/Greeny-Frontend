import styled from "styled-components";
import { EditImg } from "../../assets/images";
import { UserLoadResponseType } from "../../types/user";

const UserItem = ({ profile, nickName, joinDate }: UserLoadResponseType) => {
  return (
    <Wrapper>
      <figure>
        <picture>
          <source type="image/webp" srcSet={profile} />
          <img alt="프로필 사진" width="60" height="60" />
        </picture>
      </figure>
      <div>
        <div>
          <h2>{nickName}</h2>
          <button type="button" aria-label="별명 수정하기">
            <figure>
              <picture>
                <source type="image/webp" srcSet={EditImg} />
                <img alt="수정 펜" width="12" height="12" />
              </picture>
            </figure>
          </button>
        </div>
        <p>
          {`가입한 지 ${Math.floor(
            (new Date().getTime() - Date.parse(joinDate)) / 1000 / 60 / 60 / 24
          )}일째`}
        </p>
      </div>
    </Wrapper>
  );
};

export default UserItem;

const Wrapper = styled.article`
  width: 345px;
  height: 80px;

  display: flex;
  align-items: center;

  ${({ theme }) => theme.commons.boxShadow};

  > figure {
    margin-right: 16px;

    img {
      border-radius: 4px;
    }
  }

  > div {
    div {
      display: flex;
      align-items: center;
    }

    h2 {
      margin-right: 4px;

      color: ${({ theme }) => theme.colors.background6};
      font-size: 20px;
      font-weight: 500;
    }

    p {
      margin-top: 4px;

      color: ${({ theme }) => theme.colors.background5};
      font-size: 10px;
      font-weight: 400;
    }
  }
`;
