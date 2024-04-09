import React from "react";
import { Link } from "react-router-dom";
import lyrics from "../lyrics.json";

function Album() {
  let albums = [];
  for (const album in lyrics) {
    albums.push(album);
  }

  return (
    <div className="albumContainer">
      {albums.map((album) => (
        <div className='album' key={album}>
          <h2>{album}</h2>
          <ul className="songs">
            {Object.keys(lyrics[album]).map((song) => (
              <li key={song}>
                <Link to={`/${album}/${song}`}>
                  {song}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Album;
