import React, { createContext, useState, useEffect } from "react";
import { navigate } from "@reach/router";
import { get } from "react-hook-form";
export const dataContext = createContext();


const DataContextProvider = (props) => {

    const [data, setData] = useState(null);
    const [checkedEmail,setCheckedEmail]=useState(null)
    const [checkedPassword,setCheckedPassword]=useState(null)
    const [byemessage, setByemessage]=useState(null)
    const [token, setToken]=useState(null)



     //check localstorage

     useEffect(()=>{

        let storedEmail = localStorage.getItem('myEmailinLocalStorage');
        let storedPassword = localStorage.getItem('myPasswordinLocalStorage');
        
        setCheckedEmail(storedEmail);
        setCheckedPassword(storedPassword);
        setToken('fz0iWXirFJgLJUvlelqb')

      data && console.log ("from local:", checkedEmail, checkedPassword );


        
    
      }, [data, checkedEmail, checkedPassword, setCheckedEmail, setCheckedPassword, byemessage, setByemessage]);

      

      useEffect (() => {
          
        token &&
        fetch("https://the-one-api.dev/v2/character?limit=10", {
Method: "GET",
headers: { "Authorization": "Bearer " + token }

      })
      .then (response => response.json())
      .then (result => setData(result)) 
      
          }, [token]);
              
          
          
          data && console.log(data.docs)

      //checker om der er logget ind, hvis der er logget ind, gå til forside. Hvis der ikke er logget, så gå til Loginform-->





   







    return(

<dataContext.Provider value={{ data, setData, checkedEmail, setCheckedEmail, checkedPassword, setCheckedPassword }}>

{props.children}
</dataContext.Provider>


    );

}

export default DataContextProvider;