/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { dataContext } from "../Contexts/DataContext";
import {useContext} from "react";



const Home = () => {


//Data hentet fra context
    const { data } = useContext(dataContext);
    data && console.log("from context:", data.results[0].name);


const Homestyling = css`

border: solid red 4px;
background-color: lightblue;


`;

const liststyle=css`
background-color: pink;
padding: 0.5rem;
display: flex;
flex-direction: column;
font-weight: bold;




`;
//Herunder mapper vi hen over data.results (som er hver planet )
//trækker variablen planet ud og skriver f.eks. planetens navn eller tyngdekraft ud

return (
    data &&
    
<div css={Homestyling}>
    <h1>HAllo</h1>

    <ul>{ data.results.map (planet => <li css={liststyle}>{ planet.name }</li>)}</ul>

    <p>Truttruuut</p>

    </div>
  
)





}

export default Home