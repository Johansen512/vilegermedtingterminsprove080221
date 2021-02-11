
/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { dataContext } from "../Contexts/DataContext";
import {useContext, useState} from "react";
import { navigate } from "@reach/router";
import { useForm } from "react-hook-form";



const Loginbutton = () => {

    
  
    

  

 

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



  
 

  const tilLogin = data => {

    navigate ("/Loginform")
  }
    

  


  return ( 
    
    
    

        <section >
   
<div><h2>Login</h2>

          <button onClick={tilLogin} css={actionstyle}>Login</button></div>

       
    
    </section>
    );
}
 
export default Loginbutton