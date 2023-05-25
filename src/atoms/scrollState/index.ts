import { atom } from "recoil";

export const ScrollStateAtom = atom<number>({
  key: "scrollState",
  default: 0,
});
