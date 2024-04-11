import { useState, useEffect } from "react";
import axios from "axios";

const CLIENT_ID = "02dc0530a3d4412f95aebccc831606c5";
const CLIENT_SECRET = "475eb21290d74606ba3d504b06c0439f";

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
  const searchParams = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };

  try {
    const response = await fetch(
      `https://api.spotify.com/v1/search?q=artist:Skam track:${song}&type=track`,
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

async function searchForAlbum(album, token) {
  const searchParams = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };

  try {
    const response = await fetch(
      `https://api.spotify.com/v1/search?q=artist:Skam album:${album}&type=album`,
      searchParams
    );
    const data = await response.json();
    console.log(data.albums.items[0].images[0].url);
    return data.albums.items[0];
  } catch (error) {
    console.error("Error searching for album:", error);
    return null;
  }
}

export function useAlbumInfo(album) {
  const [token, setToken] = useState();
  const [albumInfo, setAlbumInfo] = useState(null);

  useEffect(() => {
    fetchAccessToken().then((accessToken) => {
      setToken(accessToken);
    });
  }, []);

  useEffect(() => {
    if (token) {
      searchForAlbum(album, token).then((albumData) => {
        setAlbumInfo(albumData);
      });
    }
  }, [token, album]);
  return albumInfo;
}
