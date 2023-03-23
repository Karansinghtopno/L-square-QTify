import React, { useState } from "react";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import classes from "./Album.module.css";

const Album = ({ Albums, title }) => {
  const [isShowAll, setIsShowAll] = useState(false);

  const handleIsShowAll = () => {
    setIsShowAll(!isShowAll);
  };
  return (
    <div className={classes.Album}>
      <div className={classes.topSection}>
        <p className={classes.topAlbumTitle}>{title}</p>
        <p className={classes.showAll} onClick={handleIsShowAll}>
          {isShowAll ? "Collapse" : "Show All"}
        </p>
      </div>
      <div className={classes.bottomSection}>
        {!isShowAll ? (
          <Carousel data={Albums} />
        ) : (
          <>
            {Albums.length > 0 ? (
              <>
                {Albums.map((album) => {
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
          </>
        )}
      </div>
    </div>
  );
};

export default Album;
