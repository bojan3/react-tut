import React, { useContext } from "react";
import classes from "./MeetupItem.module.css";
import Card from "../../ui/Card";
import FavoritesContext from "../store/favorites-context";

function MeetupItem(props) {
  const favoriteCtx = useContext(FavoritesContext); // you will get here context from FavoriteContext
  const isItemFavorite = favoriteCtx.isItemFavorite(props.id);

  function toggleFavoritesHandler() {
    if (favoriteCtx.isItemFavorite(props.id))
      favoriteCtx.removeFavorite(props.id);
    else {
      favoriteCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title}></img>
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoritesHandler}>
            {isItemFavorite ? "Remove from favorites" : "Add to favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
