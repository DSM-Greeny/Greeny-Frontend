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

  ${({ theme }) => theme.commons.boxShadow}

  padding: 13px 16px;

  color: ${({ theme }) => theme.colors.background6};
  font-size: ${({ theme }) => theme.fontSizes.subText};
  font-weight: 400;

  :focus {
    outline: none;
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.background5};
  }
`;
