import { atom } from "recoil";

export interface SelectedStateAtomType {
  id: number;
  place_name: string;
  x: number;
  y: number;
}

export const SelectedStateAtom = atom<SelectedStateAtomType>({
  key: "selectedState",
  default: {
    id: 0,
    place_name: "",
    x: 0,
    y: 0,
  },
});
