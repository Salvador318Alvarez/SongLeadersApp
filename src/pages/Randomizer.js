import songs from "../data/songsList";
import { useState } from "react";

const Randomizer = () => {
        //dynamic state variables
    const [firstSong, setFirstSong] = useState("First Song");
    const [secondSong, setSecondSong] = useState("Second Song");
    const [thirdSong, setThirdSong] = useState("Third Song");
    const [fourthSong, setFourthSong] = useState("Fourth Song");

     //function for the button click
     const randomizer = () => {
        let firstSongNum = Math.floor(Math.random()*songs.length);
        let secondSongNum = Math.floor(Math.random()*songs.length);
        let thirdSongNum = Math.floor(Math.random()*songs.length);
        let fourthSongNum = Math.floor(Math.random()*songs.length);

        // fixing random numbers being the same
        while ((firstSongNum === secondSongNum || 
            firstSongNum === thirdSongNum || 
            firstSongNum === fourthSongNum) || 
            (secondSongNum === thirdSongNum ||
            secondSongNum === fourthSongNum) || 
            (thirdSongNum === fourthSongNum)) 
            { console.log("songs repeated");
            secondSongNum = Math.floor(Math.random()*songs.length);
            thirdSongNum = Math.floor(Math.random()*songs.length);
            fourthSongNum = Math.floor(Math.random()*songs.length);
        }
        
        //setting song values
        setFirstSong(songs[firstSongNum].title);
        setSecondSong(songs[secondSongNum].title);
        setThirdSong(songs[thirdSongNum].title);
        setFourthSong(songs[fourthSongNum].title);

        console.log(songs.length);
    }
    return ( 
        <section>
           <div className='randomizer'>
                <h2>Randomizer</h2>
                <p>
                   {firstSong}
                </p>
                <p>
                    {secondSong}
                </p>
                <p>
                    {thirdSong}
                </p>
                <p>
                    {fourthSong}
                </p>
                <button onClick={randomizer}>Get Four Random Hymns</button>
            </div>
            


        </section>
     );
}
 
export default Randomizer;