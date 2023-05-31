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

    width: 100%;
    height: 56px;

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
    margin-left: 16px;
    margin-right: 16px;

    width: calc(100% - 32px);

    border: 1px solid ${({ theme }) => theme.colors.background2};
  }
`;
