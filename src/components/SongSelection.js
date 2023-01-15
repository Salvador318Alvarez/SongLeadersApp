import React from "react";
import { Paper } from "@mui/material";

const SongSelection = ({date, songOne, songTwo, songThree, songFour}) => { //the props property the call it with .theNameYouGaveIt
    //React.Fragment need when passing props
    // shorthand <>  </>
    return ( 
        <section className="song-selection"> 
            <h3>{date? date: 'no date'}</h3>
            <ul>
                <li>{songOne? songOne : 'no title'}</li>
                <li>{songTwo? songTwo : 'no title'}</li>
                <li>{songThree? songThree : 'no title'}</li>
                <li>{songFour? songFour : 'no title'}</li>
            </ul>
        </section>
     );
}
 
export default SongSelection;