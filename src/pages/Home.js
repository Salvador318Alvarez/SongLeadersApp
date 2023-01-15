import SongSelection from "../components/SongSelection";

const Home = () => {
    const subtitle ='subtitle';
    // props practice 
    //can call the prop what you want 
    return ( 
        <section>
            <h1 className="page-title">Upcoming Services</h1>
            <SongSelection
                date="Thursday, Jan. 19"
                songOne="#1- " 
                songTwo="#2-" 
                songThree="#3-" 
                songFour="#4-"
            /> 
            <SongSelection
                date="Sun AM, Jan. 22"
                songOne="#1- " 
                songTwo="#2-" 
                songThree="#3-" 
                songFour="#4-"
            /> 
            <SongSelection
                date="Sun PM, Jan. 22"
                songOne="#1- " 
                songTwo="#2-" 
                songThree="#3-" 
                songFour="#4-"
            /> 
           

           
        </section>
     );
}
 
export default Home;