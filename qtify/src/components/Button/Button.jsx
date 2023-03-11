import React from 'react'
import styles from "./Button.module.css"

const Button = ({text}) => {
  // console.log(text)
  return (
    <button className={styles.button}>{text}</button>
  )
}

export default Button