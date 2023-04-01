import React, { useEffect, useState } from "react";
import { fetchNewAlbums, fetchTopAlbums } from "../../api/api";
import Album from "../Album/Album";
import SongCard from "../Card/SongCard/SongCard";
import SongSection from "../SongSection/SongSection";
import classes from "./Albums.module.css";

const Albums = () => {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);

  useEffect(() => {
    fetchTopAlbums().then((res) => setTopAlbums(res));
    fetchNewAlbums().then((res) => setNewAlbums(res));
  }, []);

  // console.log("topAlbums",topAlbums)

  return (
    <div className={classes.container}>
      <Album Albums={topAlbums} title="Top Albums" />
      <Album Albums={newAlbums} title="New Albums" />
      <hr className={classes.horizontalLine} />
      <SongSection />
      <hr className={classes.horizontalLine} />
      

    </div>
  );
};

export default Albums;
