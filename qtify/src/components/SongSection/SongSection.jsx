import React, { useEffect, useState } from "react";
import { fetchFilteres, fetchSongs } from "../../api/api";
import classes from "./SongSection.module.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Carousel from "../Carousel/Carousel";

const SongSection = () => {
  const [filters, setFilters] = useState([{ key: "all", label: "All" }]);
  const [allSongs, setAllSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [value, setValue] = useState("All");

  useEffect(() => {
    fetchFilteres().then((res) => setFilters([...filters, ...res.data]));
    fetchSongs().then((res) => setAllSongs(res));
  }, []);

  useEffect(() => {
    console.log("Genre selected", value);
    handleFilteredSongs(value);
  }, [value]);

  const handleFilteredSongs = (value) => {
    let tempSongs;
    if (value) {
      tempSongs = allSongs.filter((song) => song.genre.label === value);
      // console.log(tempSongs);
      setFilteredSongs(tempSongs);
    } else {
      tempSongs = [...allSongs];
      console.log("else", tempSongs);
      setFilteredSongs(tempSongs);
    }
  };

  const handleChange = (e) => {
    // console.log("Genre:", e.target.textContent);
    setValue(e.target.textContent);
  };

  console.log("filters", filters);
  // console.log("Songs", allSongs);
  console.log("filteredsongs", filteredSongs);

  return (
    <div className={classes.container}>
      <div>
        <h4 className={classes.heading}>Songs</h4>
      </div>
      <div className={classes.tabSection}>
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={value}
            onClick={(e) => handleChange(e)}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
            TabIndicatorProps={{
              style: {
                backgroundColor: "var(--color-primary)",
              },
            }}
          >
            {filters.map((ele) => {
              return (
                <Tab
                  key={ele.key}
                  value={ele.label}
                  label={ele.label}
                  style={{ color: "white" }}
                />
              );
            })}
          </Tabs>
        </Box>
        <>
          {value === "All" ? (
            <div>
              <Carousel data={allSongs} type="song" />
            </div>
          ) : (
            <div>
              <Carousel data={filteredSongs} type="song" />
            </div>
          )}
        </>
      </div>
    </div>
  );
};

export default SongSection;
