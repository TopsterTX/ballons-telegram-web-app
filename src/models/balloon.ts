export type Balloon = {
  id: string;
  name: string;
  count: number;
  price: number;
  oldPrice?: number;
  isSale?: boolean;
  type: BalloonType;
  colors: BalloonColor[];
};

export type BalloonType = "Foil" | "Common";

export type BalloonColor =
  | "Red"
  | "Blue"
  | "Green"
  | "Black"
  | "Pink"
  | "White";
