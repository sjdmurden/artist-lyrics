import React from "react";
import { Link } from "react-router-dom";
import lyrics from "../lyrics.json";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useTrackInfo } from "../api";
import { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import { Grid, Typography, Paper, styled } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  margin: "1rem",
  padding: theme.spacing(0),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Album() {
  return (
    <Grid container spacing={{ xs: 0, sm: 1 }} justifyContent="center">
      {Object.entries(lyrics).map(([albumName, albumInfo]) => {
        const lastSong =
          Object.keys(albumInfo)[Object.keys(albumInfo).length - 1];
        const trackInfo = useTrackInfo(lastSong);

        if (!trackInfo) {
          return <div key={albumName}>Loading...</div>;
        }

        const { id, album } = trackInfo;
        const albumImage = album.images[0].url;

        return (
          <Grid item xs={9} sm={5} md={3} key={id}>
            <Item>
              <img id="img" src={albumImage} alt={albumName} />
              <Typography variant="h6" gutterBottom color={"black"}>
                {albumName}
              </Typography>
              <Typography variant="body2">
                Released: {album.release_date.slice(0, 4)==='2023' ? '2021' : album.release_date.slice(0, 4)}
              </Typography>
              <Typography variant="subtitle1">
                <ol className="songs">
                  {Object.keys(lyrics[albumName]).map((song) => (
                    <li key={song}>
                      <Link to={`/${albumName}/${song}`}>{song}</Link>
                    </li>
                  ))}
                </ol>
              </Typography>
            </Item>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default Album;
