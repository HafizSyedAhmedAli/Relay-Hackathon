import { atom } from "jotai";
import { WidgetScreen } from "@/modules/widget/types";

// Base widget state atoms
export const screenAtom = atom<WidgetScreen>("auth");

