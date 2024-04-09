import lyrics from "../lyrics.json";
import { useParams } from "react-router-dom";
import Subsongs from "./Subsongs";
import Embed from "./Embed";
import '../src/App.css'
import '../src/songpage.css'
import parse from 'html-react-parser';


function Song() {
  let { album, song } = useParams();
  return (
    <div className="songPage">
      <div className="column" id="subsongs">
        <Subsongs />
      </div>
      <div className="column">
        <div className="lyrics" id="song">
          <h2>{song}</h2>
          {parse(lyrics[album][song])}
        </div>
      </div>
      <div className="column">
        <div className="section" id="embeded">
          <Embed />
        </div>
      </div>
    </div>
  );
}

export default Song;
