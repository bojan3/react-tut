import { createContext, useState } from "react";
import React from "react";
const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  // this 3 you don't need here it's added just for better autocompletion in IDE
  addFavorites: (newFavorite) => {},
  removeFavorite: (meetupId) => {},
  isItemFavorite: (meetupId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoritesHandler,
    removeFavorite: removeFavoriteHandler,
    isItemFavorite: isItemFavoriteHandler,
  };

  function addFavoritesHandler(newFavorite) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(newFavorite);
    });
  }

  function removeFavoriteHandler(meetupId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function isItemFavoriteHandler(meetupId) {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
