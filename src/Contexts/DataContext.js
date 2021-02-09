import React, { createContext, useState, useEffect } from "react";

export const dataContext = createContext();


const DataContextProvider = (props) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://swapi.dev/api/planets/")
        .then (response => response.json())
        .then (result => setData(result))
    }, []);
    
    
    data && console.log(data.results)
    return(

<dataContext.Provider value={{ data }}>

{props.children}
</dataContext.Provider>


    );

}

export default DataContextProvider;