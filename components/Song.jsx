import lyrics from "../lyrics.json";
import { useParams } from "react-router-dom";
import Subsongs from "./Subsongs";
import Embed from "./Embed";
import "../src/App.css";
import "../src/songpage.css";
import parse from "html-react-parser";
import { Grid, Typography, Paper, styled } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "transparent",
  margin: "1rem",
  padding: theme.spacing(0),
  textAlign: "center",
  boxShadow: "none",
}));

function Song() {
  let { album, song } = useParams();
  return (
    <Grid container spacing={{ xs: 0, sm: 0 }} justifyContent="center">
      <Grid item xs={11} sm={6} md={4} order={{ xs: 2, sm: 1 }}>
        <Item>
          <Subsongs song={song} />
        </Item>
      </Grid>
      <Grid item xs={11} sm={6} md={4} order={{ xs: 1, sm: 2 }}>
        <Item>
          <div className="lyrics">
            <h2>{song}</h2>
            {parse(lyrics[album][song])}
          </div>
        </Item>
      </Grid>
      <Grid item xs={11} sm={6} md={4} order={{ xs: 3, sm: 3 }}>
        <Item>
          <Embed song={song} />
        </Item>
      </Grid>
    </Grid>
  );
}

export default Song;
