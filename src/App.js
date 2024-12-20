import React, { useState, useEffect } from "react";
import Hero from "./components/Hero/Hero";
import HomePage from "./pages/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { StyledEngineProvider } from "@mui/material/styles";
import {
  fetchFilters,
  fetchTopAlbums,
  fetchNewAlbums,
  fetchSongs,
} from "./api/api";

function App() {
  const [data, setData] = useState({});
  // const r ={
  //   topAlbums: [{}, {}, {}, {},],
  //   newAlbums: [{}, {}, {}, {},],
  //   genres: ['rock' , 'pop' , 'jazz'],
  //   songs:[]
  // };
  const generateData = (key, source) => {
    source().then((data) => {
      setData((prevState) => {
        return { ...prevState, [key]: data };
      });
    });
  };
  useEffect(() => {
    generateData("topAlbums", fetchTopAlbums);
    generateData("newAlbums", fetchNewAlbums);
    generateData("songs", fetchSongs);
    generateData("genres", fetchFilters);
  }, []);

  const { topAlbums = [], newAlbums = [], songs = [], genres = [] } = data;
  return (
    <>
      <StyledEngineProvider injectFirst>
        <Navbar searchData={[...topAlbums, ...newAlbums]} />
        <Outlet context={{ data: { topAlbums, newAlbums, songs, genres } }} />
      </StyledEngineProvider>
    </>
  );
}

export default App;
