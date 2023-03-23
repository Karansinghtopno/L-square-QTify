import React, { useEffect, useState } from "react";
import { fetchNewAlbums, fetchTopAlbums } from "../../api/api";
import Album from "../Album/Album";
import classes from "./Albums.module.css";

const Albums = () => {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);

  useEffect(() => {
    fetchTopAlbums().then((res) => setTopAlbums(res));
    fetchNewAlbums().then((res) => setNewAlbums(res));
  }, []);

  return (
    <div className={classes.container}>
      <Album Albums={topAlbums} title="Top Albums" />
      {/* <Album Albums={newAlbums} title="New Albums" /> */}
    </div>
  );
};

export default Albums;
