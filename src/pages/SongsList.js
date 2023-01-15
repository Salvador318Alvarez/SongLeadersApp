import songs from "../data/songsList";
import { useState } from "react";

const SongsList = () => {
    const [outputList, setOutputList] = useState(songs)
    const [searchInput, setSearchInput] = useState('')

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
        console.log(e.target.value);
        setOutputList(songs.filter(song => 
            song.title.includes(e.target.value)
       ))
       console.log(outputList);
    };

    return ( 
        <section className="songs-list">
            <input 
                type="text" 
                placeholder="Search songs"
                onChange={handleChange}
                value={searchInput}
               ></input>
            <h2 className="page-title">Songs List</h2>
            <ul>
          
                {outputList.map(song => ( // conditional template
                    <li key={song.title}>{song.title}</li>
                ))}
               
            
            
            </ul> 

        </section>
     );
}
 
export default SongsList;