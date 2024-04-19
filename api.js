import { useState, useEffect } from "react";
import axios from "axios";

const CLIENT_ID = "02dc0530a3d4412f95aebccc831606c5";
const CLIENT_SECRET = "475eb21290d74606ba3d504b06c0439f";
const skamId = "0jca6giupwEV9h3uxaglAy";
async function fetchAccessToken() {
  const authParams = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
  };

  try {
    const response = await fetch(
      "https://accounts.spotify.com/api/token",
      authParams
    );
    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error("Error fetching access token:", error);
    return null;
  }
}

async function searchForTrack(song, token) {
  const encodedSong = encodeURIComponent(song);

  const searchParams = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };
  if (song === 'Wake Up'){
    try {
      const response = await fetch(
        `https://api.spotify.com/v1/search?q=artist:Skam track:${song} genre:nwocr&type=track`,
        searchParams
      );
      const data = await response.json();
      return data.tracks.items[0];
    } catch (error) {
      console.error("Error searching for track:", error);
      return null;
    }
  }
  if (song === "Let's Get Rocked"){
    try {
      const response = await fetch(
        `https://api.spotify.com/v1/search?q=artist:Skam track:Peacemaker genre:nwocr&type=track`,
        searchParams
      );
      const data = await response.json();
      return data.tracks.items[0];
    } catch (error) {
      console.error("Error searching for track:", error);
      return null;
    }
  }
  if (song === "I'm Not The Only One"){
    try {
      const response = await fetch(
        `https://api.spotify.com/v1/search?q=artist:Skam track:Wake Up genre:nwocr&type=track`,
        searchParams
      );
      const data = await response.json();
      return data.tracks.items[0];
    } catch (error) {
      console.error("Error searching for track:", error);
      return null;
    }
  }
  try {
    const response = await fetch(
      `https://api.spotify.com/v1/search?q=artist:Skam track:${song} &type=track`,
      searchParams
    );
    const data = await response.json();
    return data.tracks.items[0];
  } catch (error) {
    console.error("Error searching for track:", error);
    return null;
  }
}

export function useTrackInfo(song) {
  const [token, setToken] = useState();
  const [trackInfo, setTrackInfo] = useState(null);

  useEffect(() => {
    fetchAccessToken().then((accessToken) => {
      setToken(accessToken);
    });
  }, []);

  useEffect(() => {
    if (token) {
      searchForTrack(song, token).then((trackData) => {
        setTrackInfo(trackData);
      });
    }
  }, [token, song]);
  return trackInfo;
}
