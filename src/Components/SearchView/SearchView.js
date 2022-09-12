import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { searchHeroesByName } from "../../requests";
import HeroSimplified from "../HeroSimplified/HeroSimplified";
import Loader from "../Loader/Loader";
import "./SearchView.css";

function SearchView() {
  const [searchList, setSearchListContent] = useState([]);
  const [isLoading, setLoadingState] = useState(true);
  const { name } = useParams();

  useEffect(() => {
    setLoadingState(true);
    searchHeroesByName(name).then((searchResults) => {
      const { data } = searchResults;

      if (data.error) {
        return;
      }

      const { results } = data;

      setSearchListContent(results);
      setLoadingState(false);
    });
  }, [name]);

  return (
    <>
      {!isLoading && (
        <section className="search">
          {searchList.map(({ powerstats, image, name }) => {
            return (
              <HeroSimplified
                powerstats={powerstats}
                imgUrl={image.url}
                name={name}
              />
            );
          })}
        </section>
      )}{" "}
      {isLoading && <Loader />}
    </>
  );
}

export default SearchView;
