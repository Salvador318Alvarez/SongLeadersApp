import SongSelection from "../components/SongSelection";

const Home = () => {
    // props practice 
    //can call the prop what you want 
    return ( 
        <section>
            <h1 className="page-title">Upcoming Services</h1>
            <SongSelection
                date="Thursday, Jan. 19"
                songOne="#- Example 1" 
                songTwo="#- Example 2" 
                songThree="#- Example 3" 
                songFour="#- Example 4"
            /> 
            <SongSelection
                date="Sun AM, Jan. 22"
                songOne="#- Example 1" 
                songTwo="#- Example 2" 
                songThree="#- Example 3" 
                songFour="#- Example 4"
            /> 
            <SongSelection
                date="Sun PM, Jan. 22"
                songOne="#- Example 1" 
                songTwo="#- Example 2" 
                songThree="#- Example 3" 
                songFour="#- Example 4"
            /> 
           

           
        </section>
     );
}
 
export default Home;