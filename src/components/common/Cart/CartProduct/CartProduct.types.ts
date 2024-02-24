import { Balloon } from "models/balloon.ts";

export type CartProductProps = {
  balloon: Balloon;
  onRemoveClick: (product: Balloon) => void;
};
