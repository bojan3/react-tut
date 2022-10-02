import { Routes, Route } from "react-router-dom";
import React from "react";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="new-meetup" element={<NewMeetupPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;

/* <div>
<h1>My Todos</h1>
<Todo text="Learn React" />
<Todo text="Practice React" />
<Todo text="Show your knowlodge" />
</div> */
