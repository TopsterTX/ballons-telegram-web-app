import { createEffect, createEvent, createStore } from "effector";
import { sample } from "effector";
import { getFromApi } from "api/index.ts";
import { Balloon } from "models/balloon.ts";

export const $balloons = createStore<Balloon[]>([]);

export const loadBalloonsClicked = createEvent("loadBalloonsClicked");

export const fetchBalloonsFx = createEffect(async (url: string) => {
  const response = await getFromApi(url);
  return response;
});

sample({
  clock: loadBalloonsClicked,
  fn: () => "http://192.168.0.16:3001/api/balloon",
  target: fetchBalloonsFx,
});

$balloons.on(fetchBalloonsFx.doneData, (_, balloons) => balloons);
