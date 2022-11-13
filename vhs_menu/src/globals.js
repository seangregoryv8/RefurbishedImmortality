import Effect from "./Effect.js";
export const effect = new Effect();

import Videos from "./Videos.js";
export const videos = new Videos();

import Tapes from "./Tapes.js";

let allTapes = document.getElementById("tapes").children;
export const tapes = new Tapes(allTapes, Math.ceil(allTapes.length / 5).toFixed(0));