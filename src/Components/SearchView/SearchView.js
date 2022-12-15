import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { searchHeroesByName } from "../../requests.js";
import HeroSimplified from "../HeroSimplified/HeroSimplified.js";
import Loader from "../Loader/Loader.js";
import "./SearchView.css";

function SearchView() {
  const [searchList, setSearchListContent] = useState([]);
  const [characterNotFound, setcharacterNotFound] = useState(false);
  const [isLoading, setLoadingState] = useState(true);
  const { name } = useParams();
  const uppercaseName = name.charAt(0).toUpperCase() + name.slice(1);

  useEffect(() => {
    setLoadingState(true);
    searchHeroesByName(name).then((searchResults) => {
      const { data } = searchResults;

      if (data.error) {
        setSearchListContent([]);
        setcharacterNotFound(true);
        setLoadingState(false);
        return;
      }

      const { results } = data;

      setcharacterNotFound(false);
      setSearchListContent(results);
      setLoadingState(false);
    });
  }, [name]);

  return (
    <>
      {!isLoading && (
        <section className="search">
          {!characterNotFound && (
            <h2 className="search__heading">
              We found below heroes matching name:{" "}
              <span className="search_uppercase-name-span">
                &nbsp;{uppercaseName}
              </span>
            </h2>
          )}
          <div className="search__list-wrapper">
            {searchList.map(({ powerstats, image, name, id }) => {
              return (
                <HeroSimplified
                  key={id}
                  powerstats={powerstats}
                  imgUrl={image.url}
                  name={name}
                  id={id}
                />
              );
            })}
          </div>
        </section>
      )}{" "}
      {isLoading && (
        <div className="loader-container">
          <Loader />
        </div>
      )}
      {characterNotFound && !isLoading && (
        <div className="search_notfound">
          <h3>Unfortunately, we did not find a character with name:</h3>
          <span className="search_uppercase-name-span">{uppercaseName}</span>
        </div>
      )}
    </>
  );
}

export default SearchView;
