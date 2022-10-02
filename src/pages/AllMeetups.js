import React, { useEffect } from "react";
import MeetupList from "../component/meetups/MeetupList";
import { useState } from "react";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true); // we don't need this here but is cleaner code if we have this line here
    fetch(
      "https://react-course-644dd-default-rtdb.europe-west1.firebasedatabase.app/meetups.json"
    )
      .then((response) => {
        // json format to plain text format (but this tranformation also return promise, bcs of that we need return again)
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </div>
  );
}

export default AllMeetupsPage;
