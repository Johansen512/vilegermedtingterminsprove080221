
/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { dataContext } from "../Contexts/DataContext";
import {useContext, useState} from "react";
import { navigate } from "@reach/router";
import { useForm } from "react-hook-form";



const Logoutbutton = () => {

    
  
    

  

 

  const actionstyle = css`
  font-size: 1.3rem;
  width: 8rem;
  height: 5rem;
  border: 8px solid #3a799d;
  background-color: #4c93bc;
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius:30%;
  box-shadow: 0.25rem 0.25rem 0.8rem;
  outline: 0;
  
  `;



  
  const badylf = data => {
  
    localStorage.removeItem('myEmailinLocalStorage');
    localStorage.removeItem('myPasswordinLocalStorage');
    navigate("/Loginform");
  }

 
    

  


  return ( 
    
    
    

       
   
<div><h2>Logud</h2>
<button onClick={badylf} css={actionstyle}>TRYK HER</button></div>

       
    
   
    );
}
 
export default Logoutbutton