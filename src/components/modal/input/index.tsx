import styled from "styled-components";

interface ModalInputProps {
  placeholder: string;
  inputState: string;
  setInputState: (str: string) => void;
}

export const ModalInput = ({
  placeholder,
  inputState,
  setInputState,
}: ModalInputProps) => {
  return (
    <Wrapper
      placeholder={placeholder}
      value={inputState}
      onChange={(e) => setInputState(e.currentTarget.value)}
    />
  );
};

const Wrapper = styled.input`
  width: 100%;

  color: ${({ theme }) => theme.colors.background6};
  font-size: ${({ theme }) => theme.fontSizes.subText};
  font-weight: 400;

  outline: none;
  border: 2px solid ${({ theme }) => theme.colors.background2};

  ${({ theme }) => theme.commons.boxShadow}

  padding: 13px 16px;

  ::placeholder {
    color: ${({ theme }) => theme.colors.background5};
  }
`;
