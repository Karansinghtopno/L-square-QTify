import React from 'react'
import styles from "./Search.module.css"
import searchIcon from "../../assets/Search_icon.svg"
const Search = () => {
  return (
    <div className={styles.search}> 
        <input type="text" placeholder='Search a song of your choice' />
        <div className={styles.imageContainer}><img src={searchIcon} alt="" /></div>
    </div>
  )
}

export default Search