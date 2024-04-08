import React from "react";
import lyrics from "../lyrics.json";
import { useParams, Link } from "react-router-dom";

function Subsongs() {
  let { album, song } = useParams();
  const subsongsArray = Object.keys(lyrics[album]);
  console.log(subsongsArray);
  return (
    <div className="subsongContainer">
      <h2>{album}</h2>

      <ul className="subsongs">
        <li key={album[song]}>
          {subsongsArray.map((subsong) => {
            {
              if (subsong === song) {
                return (
                  <Link style={{color: 'black'}} to={`/${album}/${subsong}`}>
                    {subsong}
                  </Link>
                );
              } else {
                return (
                  <Link to={`/${album}/${subsong}`}>
                    {subsong}
                  </Link>
                );
              }
            }
          })}
        </li>
      </ul>
    </div>
  );
}

export default Subsongs;
