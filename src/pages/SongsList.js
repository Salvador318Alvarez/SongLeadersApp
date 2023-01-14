import { useState } from "react";

const SongsList = () => {
    const [songs, setSongs] = useState([
        {id: 1, title:'title 1'},
        {id: 2, title:'title 2'},
        {id: 3, title:'title 3'},
        {id: 4, title:'title 4'}
    ]);

 
    return ( 
        <section>
            <h1>Songs List</h1>
            {songs.map((song, index)=> (
                <p key={song.id}>{index+1}. {song.title}</p>
            ))}

        </section>
     );
}
 
export default SongsList;