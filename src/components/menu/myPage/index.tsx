import styled from "styled-components";

interface MyPageMenuProps {
  children: JSX.Element | JSX.Element[];
}

const MyPageMenu = ({ children }: MyPageMenuProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default MyPageMenu;

const Wrapper = styled.article`
  width: 90vw;

  ${({ theme }) => theme.commons.boxShadow}

  padding: 0;

  a,
  button {
    padding: 16px;
    padding-top: 24px;
    padding-bottom: 24px;

    width: 100%;
    height: 32px;

    display: flex;
    align-items: center;

    color: ${({ theme }) => theme.colors.background6};
    font-size: 16px;
    font-weight: 400;
  }

  :first-child {
    padding-top: 32px;
  }

  :last-child {
    padding-bottom: 32px;
  }

  .red {
    color: ${({ theme }) => theme.colors.error};
  }

  hr {
    margin-left: 16px;
    margin-right: 16px;

    width: 100%;

    border: 1px solid ${({ theme }) => theme.colors.background2};
  }
`;
