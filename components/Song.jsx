import lyrics from '../lyrics.json'
import {useParams} from 'react-router-dom'

function Song() {
  let {album, song} = useParams()
   return (
     <div className="song">
      <h2>{song}</h2>
       {lyrics[album][song]}
     </div>
   );
 }
 
 export default Song;