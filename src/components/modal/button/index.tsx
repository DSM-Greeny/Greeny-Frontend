import { styled } from "styled-components";

interface ModalButtonProps {
  labelText: string;
}

export const ModalButton = ({ labelText }: ModalButtonProps) => {
  return <Wrapper type="submit">{labelText}</Wrapper>;
};

const Wrapper = styled.button`
  width: 100%;

  display: flex;
  justify-content: center;

  color: ${({ theme }) => theme.colors.background1};

  ${({ theme }) => theme.commons.boxShadow}

  background-color: ${({ theme }) => theme.colors.main};

  padding: 12px 16px;
`;
