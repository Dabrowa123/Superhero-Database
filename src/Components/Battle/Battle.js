import React from "react";
import BattleHeroes from "../BattleHeroes/BattleHeroes.js";
import BattleVillains from "../BattleVillains/BattleVillains.js";
import SearchformBattle from "../UI/SearchformBattle/SearchformBattle.js";
import SearchViewBattle from "../SearchViewBattle/SearchViewBattle.js";
import { useSelector } from "react-redux";
// import { useState, useEffect } from "react";
// import supermanDesktop from "../../assets/img/superman-desktop.png";
// import supermanMobile from "../../assets/img/superman-mobile.png";
// import Searchform from ".././UI/Searchform/Searchform.js";
// import Fade from "react-reveal/Fade.js";
// import FeaturedHeroesButton from "../UI/Buttons/FeaturedHeroesButton.js";
// import PlaceholderImage from "../../assets/img/superman-placeholder.png";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";

function Battle() {
  const heroesList = useSelector((state) => {
    return state.heroesBattle;
  });

  let heroesStatsSum = heroesList
    .map((hero) => Object.values(hero.powerstats).reduce((a, b) => a + +b, 0))
    .reduce((a, b) => a + +b, 0);

  return (
    <section className="battle">
      <h2>Battle</h2>
      <div className="battle__container">
        <BattleHeroes />
        <BattleVillains />
      </div>
      <div>Sum of heroes stats: {heroesStatsSum}</div>
      <br></br>
      <SearchformBattle />
      <SearchViewBattle />
    </section>
  );
}

export default Battle;
