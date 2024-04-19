import React from "react";
import { useTrackInfo } from "../api";

function Embed({ song }) {
  const trackInfo = useTrackInfo(song);

  if (!trackInfo) {
    return <div>Loading...</div>;
  }

  let { id, album } = trackInfo;

  if (song === "Let's Get Rocked"){
    id = '1EABWGm22FgzTh7gs4pAId'
  }
  if (song === "I'm Not The Only One"){
    id = '4tHmuAOt2AHtJ6E8tuj02m'
  }

  return (
    <div className="embed">
      <iframe
        id="embed"
        src={`https://open.spotify.com/embed/track/${id}?utm_source=generator`}
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Embed;
