import React, { useEffect, useState } from "react";
import axios from "axios";
import { AlbumEndpoints } from "../../App";
import classes from "./Albums.module.css";
import Card from "../Card/Card";

const Albums = () => {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);

  const fetchAlbums = async (URL) => {
    try {
      const response1 = await axios.get(URL.topAlbums);
      setTopAlbums(response1.data);

      const response2 = await axios.get(URL.newAlbums);
      setNewAlbums(response2.data);
    } catch (error) {
      setTopAlbums([]);
      setNewAlbums([]);
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchAlbums(AlbumEndpoints);
  }, []);
  console.log(topAlbums);
  return (
    <div className={classes.container}>
      <div className={classes.topAlbums}>
        <div className={classes.top}>
          <p className={classes.topAlbumsTitle}>Top Albums</p>
          <p className={classes.showAll}>Show All</p>
        </div>
        <div className={classes.bottom}>
          {topAlbums.length > 0 ? (
            <>
              {topAlbums.slice(0, 7).map((album) => {
                return (
                  <Card
                    key={album.id}
                    img={album.image}
                    follows={Math.round(album.follows / 1000)}
                    title={album.title}
                  />
                );
              })}
            </>
          ) : (
            <>Top Albums Not Found</>
          )}
        </div>
      </div>

      <div className={classes.newAlbums}>
        <div className={classes.top}>
          <p className={classes.newAlbumsTitle}>New Albums</p>
          <p className={classes.showAll}>Show All</p>
        </div>
        <div className={classes.bottom}>
          {newAlbums.length > 0 ? (
            <>
              {newAlbums.slice(0, 7).map((album) => {
                return (
                  <Card
                    key={album.id}
                    img={album.image}
                    follows={Math.round(album.follows / 1000)}
                    title={album.title}
                  />
                );
              })}
            </>
          ) : (
            <>New Albums Not Found</>
          )}
        </div>
      </div>
    </div>
  );
};

export default Albums;
