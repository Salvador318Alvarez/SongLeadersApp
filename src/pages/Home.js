import Billboard from "../components/Billboard";

const Home = () => {
    const subtitle ='subtitle';
    // props practice 
    //can call the prop what you want 
    return ( 
        <section>
            <h1>Home</h1>
            
            <Billboard title="Events" subtitle={subtitle}/> 
            <Billboard />
            <Billboard />
            <Billboard />
        </section>
     );
}
 
export default Home;