import React, { createContext, useState, useEffect } from "react";

export const dataContext = createContext();


const DataContextProvider = (props) => {

    const [data, setData] = useState(null);
    const [checkedEmail,setCheckedEmail]=useState(null)
    const [checkedPassword,setCheckedPassword]=useState(null)

    useEffect(() => {
        fetch("https://swapi.dev/api/planets/")
        .then (response => response.json())
        .then (result => setData(result))
    }, []);
    
    
    data && console.log(data.results)

    //check localstorage

    useEffect(()=>{

        let storedEmail = localStorage.getItem('myEmailinLocalStorage');
        let storedPassword = localStorage.getItem('myPasswordinLocalStorage');
        
        setCheckedEmail(storedEmail);
        setCheckedPassword(storedPassword);

      data && console.log ("from local:", checkedEmail, checkedPassword );


        //-> setFutureDate,setTextstring
    
      }, [data, checkedEmail, checkedPassword, setCheckedEmail, setCheckedPassword])







    return(

<dataContext.Provider value={{ data, setData, checkedEmail, setCheckedEmail, checkedPassword, setCheckedPassword }}>

{props.children}
</dataContext.Provider>


    );

}

export default DataContextProvider;