import styled from "styled-components";
import { dummyNews } from "../../../libs/constants/news";
import { useParams } from "react-router-dom";

export const NewsDetailPage = () => {
  const { id } = useParams();
  const news = dummyNews.filter((v) => v.id === parseInt(id!))[0];
  const formattedContent = news.content
    .split(/\n/)
    .map((v) => v.trim())
    .filter((v) => v);
  return (
    <Wrapper>
      <article>
        <h1>{news.title}</h1>
        <h2>{news.subTitle}</h2>
        {formattedContent.map((v, i) => (
          <p key={`paragraph${i}`}>{v}</p>
        ))}
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  padding-left: 5vw;
  padding-right: 5vw;
  margin-top: 16px;

  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: auto;

  article {
    width: 90vw;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    h1 {
      width: 90vw;
    }

    h2 {
      margin-bottom: 16px;

      width: 90vw;

      color: ${({ theme }) => theme.colors.background6};
      font-size: ${({ theme }) => theme.fontSizes.text};
      font-weight: 600;
    }

    p {
      width: 90vw;

      font-weight: 600;
    }
  }
`;
