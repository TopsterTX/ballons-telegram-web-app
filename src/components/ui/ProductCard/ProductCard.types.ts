import { Balloon } from "models/index.ts";

export type OnButtonClick = (balloon: Balloon) => void;

export type ProductCardProps = {
  balloon: Balloon;
  onButtonClick?: OnButtonClick;
};
