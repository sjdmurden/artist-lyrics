import React from "react";
import { Link } from "react-router-dom";
import lyrics from "../lyrics.json";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useAlbumInfo, useTrackInfo } from "../api";


const albums = [];
const firstSongs = [];
for (const album in lyrics) {
  albums.push(album);
  const songs = Object.keys(lyrics[album]);
  const lastSong = songs[songs.length - 1];
  firstSongs.push(lastSong);
}
console.log(firstSongs);

//firstSongs[index]

function Album() {
  
  return (
    <div className="albumContainer">
      {albums.map((album1, index) => {
          const trackInfo = useTrackInfo(firstSongs[index]);

          if (!trackInfo) {
            return <div>Loading...</div>;
          }
        
          const { id, album } = trackInfo;
          console.log(trackInfo, '<-- trackInfo')
          const albumImage = album.images[0].url
        return (
          <Card className="album" sx={{ maxWidth: 345 }}>
            <CardMedia
              className="cardMediaImg"
              image={albumImage}
              title="album cover"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {album1}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <ul className="songs">
                  {Object.keys(lyrics[album1]).map((song) => (
                    <li key={song}>
                      <Link to={`/${album1}/${song}`}>{song}</Link>
                    </li>
                  ))}
                </ul>
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

export default Album;
