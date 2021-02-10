
/**@jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { dataContext } from "../Contexts/DataContext";
import {useContext, useState} from "react";
import { useForm } from "react-hook-form";



const Loginform = () => {

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {console.log (data.email, data.password)}

const sectionstyle= css`
display: flex;
flex-direction: column;
border: solid 5px yellow;

`;

    


    return (  

        <section >
        <form css={sectionstyle} onSubmit={handleSubmit(onSubmit)}>
        
        <label for="number">Indtast e-mail og password</label>
          
         
         
          <input type='e-mail' name="email"  ref={register({ required: true })} />
          <input type='password' name="password"  ref={register({ required: true })} />
        
          
          
          
          {errors.exampleRequired && <span>This field is required</span>}
          
          <input type="submit" />
        </form>
    
    </section>
    );
}
 
export default Loginform