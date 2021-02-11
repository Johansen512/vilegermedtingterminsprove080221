import React, { createContext, useState, useEffect } from "react";
import { navigate } from "@reach/router";
import { get } from "react-hook-form";
export const dataContext = createContext();


const DataContextProvider = (props) => {

    const [data, setData] = useState(null);
    const [checkedEmail,setCheckedEmail]=useState(null)
    const [checkedPassword,setCheckedPassword]=useState(null)
    const [byemessage, setByemessage]=useState(null)



     //check localstorage

     useEffect(()=>{

        let storedEmail = localStorage.getItem('myEmailinLocalStorage');
        let storedPassword = localStorage.getItem('myPasswordinLocalStorage');
        
        setCheckedEmail(storedEmail);
        setCheckedPassword(storedPassword);

      data && console.log ("from local:", checkedEmail, checkedPassword );


        
    
      }, [data, checkedEmail, checkedPassword, setCheckedEmail, setCheckedPassword, byemessage, setByemessage]);

      useEffect (() => {fetch("https://the-one-api.dev/v2/character", {
Method: "GET",
headers: { "Authorization": "Bearer fz0iWXirFJgLJUvlelqb" }

      })
      .then (response => response.json())
      .then (result => setData(result)) 
      
          }, []);
              
          
          
          data && console.log(data.docs)

      //checker om der er logget ind-->

    useEffect (() => {
checkedPassword ? navigate("/") : navigate("/Loginform")

/*fetch("https://swapi.dev/api/planets/")
.then (response => response.json())
.then (result => setData(result)) */





        }); 



   







    return(

<dataContext.Provider value={{ data, setData, checkedEmail, setCheckedEmail, checkedPassword, setCheckedPassword }}>

{props.children}
</dataContext.Provider>


    );

}

export default DataContextProvider;