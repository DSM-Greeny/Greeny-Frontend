import styled from "styled-components";

interface MyPageMenuProps {
  children: JSX.Element | JSX.Element[];
}

const MyPageMenu = ({ children }: MyPageMenuProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default MyPageMenu;

const Wrapper = styled.article`
  width: 345px;

  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.commons.boxShadow}

  a,
  button {
    width: 100%;
    height: 32px;

    display: flex;
    align-items: center;

    color: ${({ theme }) => theme.colors.background6};
    font-size: 16px;
    font-weight: 400;
  }

  .red {
    color: ${({ theme }) => theme.colors.error};
  }

  hr {
    margin-top: 8px;
    margin-bottom: 8px;

    width: 100%;

    border: 1px solid ${({ theme }) => theme.colors.background2};
  }
`;
