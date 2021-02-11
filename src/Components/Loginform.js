
/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { dataContext } from "../Contexts/DataContext";
import {useContext, useState} from "react";
import { useForm } from "react-hook-form";
import { navigate } from "@reach/router";



const Loginform = () => {

  const {checkedEmail}=useContext(dataContext);
  const {checkedPassword}=useContext(dataContext);

  console.log ("from context:", checkedEmail, checkedPassword );
  

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {console.log (data.email, data.password)
  
    localStorage.setItem('myEmailinLocalStorage', data.email)
    localStorage.setItem('myPasswordinLocalStorage', data.password);
    navigate("/");
  
  }

const sectionstyle= css`
display: flex;
flex-direction: column;
max-width: 30rem;

`;

    


    return (  

        <section >
          <h2>TILMELD: Indtast e-mail og password</h2>
        <form css={sectionstyle} onSubmit={handleSubmit(onSubmit)}>
          
        <label for="email">E-mail</label>
          <input type='email' name="email"  ref={register({ required: true })} />
          <label for="passsword">Password</label>
          <input type='password' name="password"  ref={register({ required: true })} />
        
          
          
          
          {errors.exampleRequired && <span>This field is required</span>}
          
          <input type="submit" value="Tilmeld"/>
        </form>
    
    </section>
    );
}
 
export default Loginform