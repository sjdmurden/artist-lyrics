import React, { useEffect } from "react";
import { Axios } from "axios";
import lyrics from "../lyrics.json";
import SpotifyWebApi from "spotify-web-api-node";

const CLIENT_ID = "02dc0530a3d4412f95aebccc831606c5";
const CLIENT_SECRET = "475eb21290d74606ba3d504b06c0439f";

function Embed() {
  useEffect(() => {
    const authParams = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body : `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    };
    fetch("https://accounts.spotify.com/api/token", authParams)
    .then(result => result.json())
    .then(data => console.log(data))
  }, [])


  return (
    <div className="embed">
      embed component
    </div>
  );
}

export default Embed;
