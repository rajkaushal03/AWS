/* eslint-disable react/prop-types */
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import "@aws-amplify/ui-react/styles.css";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import { listSongs } from "./graphql/queries.js";
import { useEffect, useState } from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import amplifyconfig from "./amplifyconfiguration.json";
import "@aws-amplify/ui-react/styles.css";
import NavBar from "./pages/NavBar.jsx";
Amplify.configure(amplifyconfig);

// eslint-disable-next-line react-refresh/only-export-components
const App = ({ signOut, user }) => {
  const client = generateClient();

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetchSongs();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchSongs = async () => {
    try {
      console.log("Executing GraphQL query:", listSongs); // Debugging
      const songData = await client.graphql(listSongs);
      const songList = songData.data.listSongs.items;
      console.log("songList", songList);
      setSongs(songList);
    } catch (error) {
      console.log("error on fetching songs", error);
    }
  };
  return (
    <div>
      <NavBar user={user} signOut={signOut}  />
      <Home />
      <Skills />
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default withAuthenticator(App);
