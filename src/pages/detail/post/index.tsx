import styled from "styled-components";
import { dummyPosts } from "../../../libs/constants/posts";
import { isHttpsUrl } from "../../../libs/constants/isHttpsUrl";
import { useParams } from "react-router-dom";

const PostDetailPage = () => {
  const { id } = useParams();
  const post = dummyPosts.filter((v) => v.id === parseInt(id!))[0];
  const content = post
    .content!.split(/\n/)
    .map((v) => v.trim())
    .filter((v) => v);
  return (
    <Wrapper>
      <article>
        <h1>{post.title}</h1>
        <div>
          <span>{`작성자 ${post.writer}`}</span>
          <span>{post.writeDate}</span>
        </div>
        {content.map((v, i) =>
          isHttpsUrl(v) ? (
            <figure key={`image${i}`}>
              <img src={v} alt="" />
            </figure>
          ) : (
            <p key={`paragraph${i}`}>{v}</p>
          )
        )}
      </article>
    </Wrapper>
  );
};

export default PostDetailPage;

const Wrapper = styled.main`
  margin-top: 16px;

  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: auto;

  article {
    padding-bottom: 32px;

    width: 345px;
    height: max-content;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    h1 {
      width: 345px;
    }

    div {
      padding-bottom: 8px;
      margin-bottom: 16px;

      width: 345px;

      display: flex;
      justify-content: space-between;

      border-bottom: 1px solid ${({ theme }) => theme.colors.background3};
    }

    p {
      width: 345px;

      font-weight: 600;
    }

    figure {
      display: flex;
      justify-content: center;
    }

    img {
      max-width: 345px;
      max-height: 240px;
    }
  }
`;
