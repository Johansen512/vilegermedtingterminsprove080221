/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { dataContext } from "../Contexts/DataContext";
import {useContext} from "react";



const Home = () => {



    const { data } = useContext(dataContext);
    data && console.log("from context:", data.results[0].name);






return (
    
    <>

    <h1>HAllo</h1>

    {data && data.results.map (planet => <li>{ planet.name }</li>)}

    <p>Truttruuut</p>


    </>
)





}

export default Home