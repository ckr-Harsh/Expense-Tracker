import React, { useContext, useEffect, useState } from "react";
import { DataNew } from "./Context";

function Balance() {
  const [data, setData] = useContext(DataNew);
  const [final,setFinal]= useState();

useEffect(() => {
   Do();
}, [data])
  const Do = ()=>{
    //for mk da bose ,(provide better names ig)
    let a = data.map(val=>val.amount);
    console.log(a);


    //----Part 1 (greater than zero)
    let b1 = a.filter(arr=>arr>=0);
    let c1= b1.map(val=>Math.abs(val));
    let d1= c1.reduce((total,arr)=>total+arr,0);
    console.log(d1);


    // ------Part 2 (smaller than zero)
    let b2 = a.filter(arr=>arr<0);
    let c2= b2.map(val=>Math.abs(val));
    let d2= c2.reduce((total,arr)=>total+arr,0);
    console.log(d2);
   

    //Final Calc
    setFinal(d1-d2);
  }
  return (
    <>
      <h2>Your Balance</h2>
      <h2>${final}</h2>
    </>
  );
}

export default Balance;
