import styled from "styled-components";
import { dummyNews } from "../../../libs/constants/news";

const NewsDetailPage = () => {
  const content = dummyNews.content
    .split(/\n/)
    .map((v) => v.trim())
    .filter((v) => v);
  return (
    <Wrapper>
      <article>
        <h1>{dummyNews.title}</h1>
        {content.map((v, i) => (
          <p key={`paragraph${i}`}>{v}</p>
        ))}
      </article>
    </Wrapper>
  );
};

export default NewsDetailPage;

const Wrapper = styled.main`
  margin-top: 16px;

  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: auto;

  article {
    width: 345px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    h1 {
      margin-bottom: 16px;

      width: 345px;
    }

    p {
      width: 345px;

      font-weight: 600;
    }
  }
`;
