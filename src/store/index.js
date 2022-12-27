import { configureStore } from "@reduxjs/toolkit";
import {
  heroesBattleReducer,
  addHeroBattle,
  removeHeroBattle,
} from "./slices/heroesBattleSlice.js";
import {
  villainsBattleReducer,
  addVillainBattle,
  removeVillainBattle,
} from "./slices/villainsBattleSlice.js";
import {
  searchNameToBattle,
  searchedNameToBattleReducer,
} from "./slices/searchedNameToBattle.js";
import { reset } from "./actions.js";

const store = configureStore({
  reducer: {
    heroesBattle: heroesBattleReducer,
    villainsBattle: villainsBattleReducer,
    searchedNameToBattle: searchedNameToBattleReducer,
  },
});

export {
  store,
  reset,
  addHeroBattle,
  removeHeroBattle,
  addVillainBattle,
  removeVillainBattle,
  searchNameToBattle,
};