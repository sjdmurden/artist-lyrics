import React from "react";
import { useTrackInfo } from "../api";

function Embed({ song }) {
  const trackInfo = useTrackInfo(song);

  if (!trackInfo) {
    return <div>Loading...</div>;
  }

  const { id, album } = trackInfo;
  const albumImage = album.images[0].url

  return (
    <div className="embed">
      <iframe
        id="embed"
        src={`https://open.spotify.com/embed/track/${id}?utm_source=generator`}
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
      {/* <img src={albumImage} alt="Album cover" /> */}
    </div>
  );
}

export default Embed;
