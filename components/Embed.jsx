import React, { useEffect, useState } from "react";
import { useTrackInfo } from "../api";
import ScaleLoader from "react-spinners/ScaleLoader";

function Embed({ song }) {
  const trackInfo = useTrackInfo(song);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (trackInfo) {
      setLoaded(true);
    }
  }, [trackInfo]);

  if (!trackInfo) {
    return (
      <div className="embed-loading">
        Getting track from Spotify...
        <ScaleLoader
          color={"white"}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  let { id, album } = trackInfo;

  if (song === "Let's Get Rocked") {
    id = "1EABWGm22FgzTh7gs4pAId";
  }
  if (song === "I'm Not The Only One") {
    id = "4tHmuAOt2AHtJ6E8tuj02m";
  }

  return (
    <div className={`embed`}>
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
