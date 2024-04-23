import React, { useState, useEffect } from "react";
import lyrics from "../lyrics.json";
import { useParams, Link } from "react-router-dom";
import "../src/songpage.css";
import { useTrackInfo } from "../api";
import { Grid, Typography, Paper, styled } from "@mui/material";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

function Subsongs() {
  let { album, song } = useParams();
  const albumData = lyrics[album];
  const subsongsArray = albumData ? Object.keys(albumData.songs) : [];
  const trackInfo = useTrackInfo(song);
  const [albumImage, setAlbumImage] = useState(`https://placehold.co/400?text=${album}`);

  useEffect(() => {
    if (trackInfo && trackInfo.album.images.length > 0) {
      setAlbumImage(trackInfo.album.images[0].url);
    }
  }, [trackInfo]);

  return (
    <div className="subsongOver">

    <div className="subsongContainer">
      <img src={albumImage} alt="Album cover" />
      <ol className="subsongs">
        <h2>{album}<br/>
        <span style={{fontSize: '1rem'}}>{albumData.releaseDate}</span></h2>
        {subsongsArray.map((subsong) => (
          <li key={subsong}>
            <Link
              to={`/${album}/${subsong}`}
              className={subsong === song ? "current" : ""}
              onClick={scrollToTop}
            >
              {subsong}
            </Link>
          </li>
        ))}
      </ol>
    </div>
    </div>
  );
}

export default Subsongs;
