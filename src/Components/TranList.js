import React, { useContext } from 'react'
import {DataNew} from './Context'

function TranList() {

   const [data, setData] = useContext(DataNew);

    const Del = (index)=>{
        setData(preState=>{
            console.log(index);
              return  preState.filter((val,id)=>{
                            return index!== id;
                      }) 
              
        })
    }
 
    return (
        <>
            <h3>History</h3>
            <ul>
                    {data.map((val,index)=>{
                        return(
                           <li>
                               <button index={index} onClick={()=>Del(index)} className='del'>x</button>
                             <span className='text'> {val.type} </span>  :   
                             <span className='text'> {val.amount} </span> 
                             </li>
                        )
                    })}
               
               
            </ul>
        </>
    )
}

export default TranList
