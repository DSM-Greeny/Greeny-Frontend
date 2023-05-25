import { atom } from "recoil";

export interface SelectedStateAtomType {
  id: string;
  place_name: string;
  x: string;
  y: string;
}

export const SelectedStateAtom = atom<SelectedStateAtomType>({
  key: "selectedState",
  default: {
    id: "",
    place_name: "",
    x: "",
    y: "",
  },
});
