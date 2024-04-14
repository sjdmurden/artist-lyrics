import React from "react";
import lyrics from "../lyrics.json";
import { useParams, Link } from "react-router-dom";
import "../src/songpage.css";
import { useTrackInfo } from "../api";

function Subsongs() {
  let { album, song } = useParams();
  const subsongsArray = Object.keys(lyrics[album]);

  const trackInfo = useTrackInfo(song);

  if (!trackInfo) {
    return <div>Loading...</div>;
  }

  const albumImage = trackInfo.album.images[0].url

  return (
    <div className="subsongContainer">
      <img src={albumImage} alt="Album cover" />

      <ul className="subsongs">
      <h2>{album}</h2>
        {subsongsArray.map((subsong) => (
          <li key={subsong}>
            <Link
              to={`/${album}/${subsong}`}
              className={subsong === song ? "current" : ""}
            >
              {subsong}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Subsongs;
