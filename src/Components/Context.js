import React ,{ createContext ,useState } from 'react'

 export const DataNew = createContext();

 const Context=(props)=> {
    
    const [data,setData] = useState([
        {
            type: 'Cash',
            amount :'+400',
            key:'amount',   
        },
        {
            type:'Rent',
            amount:'-100',
            key:'index+1',
        }
    ]);
    return (
        <>
        <DataNew.Provider value={[data,setData]}>
            {props.children}
        </DataNew.Provider>
            
        </>
    )
}
export default Context;




