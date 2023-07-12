import { atom } from "recoil";
import { dummyCategories } from "../../libs/constants/categories";

export interface CategoryStateAtomType {
  categoryResponses: string[];
  category: string;
}

export const CategoryStateAtom = atom<CategoryStateAtomType>({
  key: "categoryState",
  default: { categoryResponses: dummyCategories, category: "전체" },
});
