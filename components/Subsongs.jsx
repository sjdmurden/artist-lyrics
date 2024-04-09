// subsongs.jsx

import React from "react";
import lyrics from "../lyrics.json";
import { useParams, Link } from "react-router-dom";
import "../src/songpage.css";

function Subsongs() {
  let { album, song } = useParams();
  const subsongsArray = Object.keys(lyrics[album]);

  return (
    <div className="subsongContainer">
      <h2>{album}</h2>

      <ul className="subsongs">
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
