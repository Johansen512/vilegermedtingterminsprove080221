import React, { createContext, useState, useEffect } from "react";
import { navigate } from "@reach/router";
export const dataContext = createContext();


const DataContextProvider = (props) => {

    const [data, setData] = useState(null);
    const [checkedEmail,setCheckedEmail]=useState(null)
    const [checkedPassword,setCheckedPassword]=useState(null)



     //check localstorage

     useEffect(()=>{

        let storedEmail = localStorage.getItem('myEmailinLocalStorage');
        let storedPassword = localStorage.getItem('myPasswordinLocalStorage');
        
        setCheckedEmail(storedEmail);
        setCheckedPassword(storedPassword);

      data && console.log ("from local:", checkedEmail, checkedPassword );


        
    
      }, [data, checkedEmail, checkedPassword, setCheckedEmail, setCheckedPassword]);

      //checker om der er logget ind-->

    useEffect (() => {
checkedPassword && checkedEmail ? console.log ("Halløj der!") : navigate("/Loginform")

/*fetch("https://swapi.dev/api/planets/")
.then (response => response.json())
.then (result => setData(result)) */





        }, [checkedPassword, checkedEmail]); 

  useEffect (() => {fetch("https://swapi.dev/api/planets/")
.then (response => response.json())
.then (result => setData(result)) 

    }, []);
        
    
    
    data && console.log(data.results)

   







    return(

<dataContext.Provider value={{ data, setData, checkedEmail, setCheckedEmail, checkedPassword, setCheckedPassword }}>

{props.children}
</dataContext.Provider>


    );

}

export default DataContextProvider;