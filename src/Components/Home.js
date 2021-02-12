/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { dataContext } from "../Contexts/DataContext";
import Logoutbutton from '../Components/Logoutbutton';
import Loginbutton from '../Components/Loginbutton';
import {useContext, useEffect, useState} from "react";



const Home = () => {

    
//Data hentet fra context
    const { data } = useContext(dataContext);
    const {checkedPassword}=useContext(dataContext);
    data && console.log("from context:", data);

    const [lotrname, setLotrname]=useState(null)
    const [lotrage, setLotrage]=useState(null)


    


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

return  data && (
   
    
<div css={Homestyling}>
    <h1>Hallo</h1>

    <ul>{ data.docs.map (character => <div><li css={liststyle}>{ character.name}  { character.gender}</li></div>)}</ul>

    <p>Truttruuut</p>

    <section >
   
   {checkedPassword ? <Logoutbutton /> : <Loginbutton />}
  
   
          
       
       </section>

    </div>
  
)





}

export default Home