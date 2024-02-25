import { createStore, createEvent } from "effector";
import { InitialState } from "store/cart/types.ts";
import { Balloon } from "models/balloon.ts";

export const $cart = createStore<InitialState>({
  totalPrices: 0,
  products: [],
});

export const addProduct = createEvent<Balloon>("addProduct");
export const removeProduct = createEvent<Balloon>("removeProduct");

$cart.on(addProduct, (state, value) => ({
  ...state,
  totalPrices: state.totalPrices + value.price,
  products: [...state.products, value],
}));

$cart.on(removeProduct, (state, value) => ({
  ...state,
  totalPrices:
    state.totalPrices === 0 || state.totalPrices - value.price < 0
      ? 0
      : state.totalPrices - value.price,
  products: state.products.filter((product) => product.id !== value.id),
}));
