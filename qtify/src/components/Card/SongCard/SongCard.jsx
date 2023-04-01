import React from 'react'
import classes from "./SongCard.module.css"

const SongCard = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        {/* image */}
        <img src={props.img} alt="cardImage" />
        {/* followers */}
        <p>{`${props.likes} likes`}</p>
      </div>
      <div className={classes.bottom}>{props.title}</div>
    </div>
  )
}

export default SongCard
