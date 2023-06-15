import { atom } from "recoil";

export type ModalStateAtomType = JSX.Element | JSX.Element[] | undefined;

export const ModalStateAtom = atom<ModalStateAtomType>({
  key: "modalState",
  default: undefined,
});
