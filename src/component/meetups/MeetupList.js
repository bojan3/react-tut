import React from "react";
import classes from "./MeetupsList.module.css";
import MeetupItem from "./MettupItem";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.addrress}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
