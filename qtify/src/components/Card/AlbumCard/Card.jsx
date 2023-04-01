import React from "react";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import classes from "./Card.module.css";

const Card = ({ data, type }) => {
  const getCard = (type) => {
    switch (type) {
      case "album": {
        return (
          <Tooltip
            title={`${data.songs.length} songs`}
            placement="top"
            disableFocusListener
            disableTouchListener
            TransitionComponent={Zoom}
          >
            <div className={classes.container}>
              <div className={classes.top}>
                {/* image */}
                <img src={data.image} alt="cardImage" />
                {/* followers */}
                <p>{`${Math.floor(data.follows / 1000)}K follows`}</p>
              </div>
              <div className={classes.bottom}>{data.title}</div>
            </div>
          </Tooltip>
        );
      }
      case "song":{
        return (
          <div className={classes.container}>
            <div className={classes.top}>
              {/* image */}
              <img src={data.image} alt="cardImage" />
              {/* followers */}
              <p>{`${Math.floor(data.likes/1000)}k likes`}</p>
            </div>
            <div className={classes.bottom}>{data.title}</div>
          </div>
        )
      }
      default: return <></>
    }
  };
  return getCard(type)
};

export default Card;
