import React from "react";
// import { useState, useEffect } from "react";
// import supermanDesktop from "../../assets/img/superman-desktop.png";
// import supermanMobile from "../../assets/img/superman-mobile.png";
// import Searchform from ".././UI/Searchform/Searchform.js";
// import Fade from "react-reveal/Fade.js";
// import FeaturedHeroesButton from "../UI/Buttons/FeaturedHeroesButton.js";
// import PlaceholderImage from "../../assets/img/superman-placeholder.png";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";
import { useDispatch, useSelector } from "react-redux";
import { addHeroBattle, removeHeroBattle } from "../store";

function BattleHeroes() {
  const dispatch = useDispatch();
  const heroesListBattle = useSelector((state) => {
    return state.heroes;
  });

  const handleHeroAddToBattle = (hero) => {
    dispatch(addHeroBattle(hero));
  };
  const handleHeroRemoveFromBattle = (hero) => {
    dispatch(removeHeroBattle(hero));
  };

  return <section className="battle-heroes"></section>;
}

export default BattleHeroes;
