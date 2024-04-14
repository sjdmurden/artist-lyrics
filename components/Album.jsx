import React from "react";
import { Link } from "react-router-dom";
import lyrics from "../lyrics.json";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useTrackInfo } from "../api";
import { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import { Grid, Typography, Paper, styled } from "@mui/material";

const StyledGridContainer = styled("div")({
  display: 'flex',
  justifyContent: 'center',
  
});
const StyledGrid = styled(Grid)({
  gap: "20px",
  padding: "20px",
  width: '80%'
});

function Album() {
  return (
    <StyledGridContainer>
      <StyledGrid container spacing={2}>
        {Object.entries(lyrics).map(([albumName, albumInfo]) => {
          const lastSong =
            Object.keys(albumInfo)[Object.keys(albumInfo).length - 1];
          const trackInfo = useTrackInfo(lastSong);

          if (!trackInfo) {
            return <div key={albumName}>Loading...</div>;
          }

          const { id, album } = trackInfo;
          const albumImage = album.images[0].url;

          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={id}>
              <Paper>
                <img
                  src={albumImage}
                  alt={albumName}
                  style={{ width: "100%", height: "auto" }}
                />
                <Typography variant="h6" gutterBottom>
                  {albumName}
                </Typography>
                <Typography variant="body2">
                  Released: {album.release_date.slice(0, 4)}
                </Typography>
                <ol className="songs">
                  {Object.keys(lyrics[albumName]).map((song) => (
                    <li key={song}>
                      <Link to={`/${albumName}/${song}`}>{song}</Link>
                    </li>
                  ))}
                </ol>
              </Paper>
            </Grid>
          );
        })}
      </StyledGrid>
    </StyledGridContainer>
  );
}

export default Album;

// <div className="albumContainer">
//   {albums.map((album1, index) => {
//     const trackInfo = useTrackInfo(firstSongs[index]);

//     if (!trackInfo) {
//       return <div>Loading...</div>;
//     }

//     const { id, album } = trackInfo;

//     const albumImage = album.images[0].url;
//     return (
//       <Card className="album" sx={{ maxWidth: 345 }}>
//         <CardMedia
//           className="cardMediaImg"
//           image={albumImage}
//           title="album cover"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             {album1}
//           </Typography>
//           <Typography variant="h7">
//             {album.release_date.slice(0, 4)}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
// <ol className="songs">
//   {Object.keys(lyrics[album1]).map((song) => (
//     <li key={song}>
//       <Link to={`/${album1}/${song}`}>{song}</Link>
//     </li>
//   ))}
// </ol>
//           </Typography>
//         </CardContent>
//       </Card>
//     );
//   })}
// </div>
