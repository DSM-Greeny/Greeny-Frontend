import styled from "styled-components";
import { dummyImage } from "../../../libs/constants/image";
import { PlaceType } from "../../../types/place";
import { GoBackImg } from "../../../assets/images";
import { useSetRecoilState } from "recoil";
import {
  SelectedStateAtom,
  SelectedStateAtomType,
} from "../../../atoms/selectedState";

interface PlaceDetailProps {
  place: PlaceType;
}

const PlaceDetail = ({ place }: PlaceDetailProps) => {
  const setSelectedState =
    useSetRecoilState<SelectedStateAtomType>(SelectedStateAtom);
  return (
    <Wrapper>
      <div>
        <button
          type="button"
          aria-label="뒤로가기"
          onClick={() =>
            setSelectedState({ id: "", place_name: "", x: "", y: "" })
          }
        >
          <figure>
            <picture>
              <source type="image/webp" srcSet={GoBackImg} />
              <img alt="뒤로가기 화살표" width="14" height="14" />
            </picture>
          </figure>
        </button>
        <h1>{place.place_name}</h1>
        <p>{place.category_name}</p>
      </div>
      <span>{place.address_name}</span>
      <div>
        {dummyImage.map((v, i) => (
          <img
            key={`landscape${i}`}
            src={v}
            alt={`주변 풍경 ${i}번`}
            width={150}
            height={112}
          />
        ))}
      </div>
      <h2>장소 설명</h2>
      <p>{`전화번호: ${place.phone || "없음"}`}</p>
      <p>
        {`자세히 알아보기: `}
        <a
          href={place.place_url}
          target="_blank"
          rel="noopener noreferer nofollow"
        >
          {place.place_url}
        </a>
      </p>
    </Wrapper>
  );
};

export default PlaceDetail;

const Wrapper = styled.article`
  width: 345px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  ${({ theme }) => theme.commons.boxShadow}

  margin-bottom: 32px;

  div {
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      margin-left: 8px;

      font-size: ${({ theme }) => theme.fontSizes.text};
    }

    p {
      margin-left: auto;

      width: max-content;

      font-size: ${({ theme }) => theme.fontSizes.subText};
    }
  }

  span {
    margin-left: 22px;
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSizes.subText};
  }

  > p {
    width: 100%;

    font-size: ${({ theme }) => theme.fontSizes.description};
  }
`;
