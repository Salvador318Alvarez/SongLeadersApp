const Billboard = (props) => { //the props property the call it with .theNameYouGaveIt
    return ( 
        <section>
            <h1>{props.title? props.title : 'BILLBOARD'}</h1>
            <p>{props.subtitle? props.subtitle : 'no subtitle'}</p>
        </section>
     );
}
 
export default Billboard;