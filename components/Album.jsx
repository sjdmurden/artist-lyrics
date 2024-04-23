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

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

function Album() {
  return (
    <Grid container spacing={{ xs: 0, sm: 1 }} justifyContent="center">
      {Object.entries(lyrics).map(([albumName, albumData]) => {
        const lastSong = Object.keys(albumData.songs)[
          Object.keys(albumData.songs).length - 2
        ];
        const trackInfo = useTrackInfo(lastSong);

        if (!trackInfo) {
          return (
            <Grid item xs={9} sm={5} md={3} key={albumName}>
              <Item>
                <img
                  id="img"
                  src={`https://placehold.co/400?text=${albumName}`}
                  alt={albumName}
                />
                <Typography variant="h6" gutterBottom color={"black"}>
                  {albumName}
                </Typography>
                <Typography variant="body2">
                  {albumData.releaseDate}
                </Typography>
                <Typography variant="subtitle1">
                  <ol className="songs">
                    {Object.keys(albumData.songs).map((song) => (
                      <li key={song}>
                        <Link
                          to={`/${albumName}/${song}`}
                          onClick={scrollToTop}
                        >
                          {song}
                        </Link>
                      </li>
                    ))}
                  </ol>
                </Typography>
              </Item>
            </Grid>
          );
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
              <Typography variant="body2">{albumData.releaseDate}</Typography>
              <Typography variant="subtitle1">
                <ol className="songs">
                  {Object.keys(albumData.songs).map((song) => (
                    <li key={song}>
                      <Link to={`/${albumName}/${song}`} onClick={scrollToTop}>
                        {song}
                      </Link>
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
