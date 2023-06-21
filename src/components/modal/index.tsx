import { createPortal } from "react-dom";
import { useSetRecoilState } from "recoil";
import { styled } from "styled-components";
import { ModalStateAtom, ModalStateAtomType } from "../../atoms/modalState";

interface ModalProps {
  children: JSX.Element | JSX.Element[];
}

export const Modal = ({ children }: ModalProps) => {
  const setModalState = useSetRecoilState<ModalStateAtomType>(ModalStateAtom);
  return createPortal(
    <>
      <Filter onClick={() => setModalState(undefined)} />
      <Wrapper>
        <button type="button" onClick={() => setModalState(undefined)}>
          ✖
        </button>
        {children}
      </Wrapper>
    </>,
    document.getElementById("modal")!
  );
};

const Filter = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.25);

  width: 100%;
  height: 100%;

  z-index: 98;

  ${({ theme }) => theme.animations.fade};

  animation: fade 0.25s ease;
`;

const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);

  width: 90vw;

  z-index: 99;

  ${({ theme }) => theme.commons.boxShadow};

  margin-left: 5vw;
  margin-right: 5vw;

  ${({ theme }) => theme.animations.fade};

  animation: fade 0.25s ease;

  > button {
    position: absolute;
    top: 16px;
    right: 16px;

    cursor: pointer;
  }
`;
