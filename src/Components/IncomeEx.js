import React, { useContext, useState, useEffect } from "react";
import { DataNew } from "./Context";
import "./incomeEx.css";

function IncomeEx() {
  const [data, setData] = useContext(DataNew);
  const [mPlus, setPlus] = useState();
  const [mMinus, setMinus] = useState();

  useEffect(() => {
    Fire();
  }, [data]);

  const Fire = () => {
    setMinus((pre) => {
      //for mk,
      let a = data.map((val) => val.amount);
      let b = a.filter((val) => val < 0);
      // console.log(b);
      let c = b.map((val) => Math.abs(val));
      // console.log(c);
      if (c.length > 0) {
        let d = c.reduce((total, val) => total + val, 0);
        setMinus(d);
      } else {
      }
    });
    setPlus((pre) => {
      //for MK,
      let a = data.map((val) => val.amount);
      let b = a.filter((val) => val >= 0);
      // console.log(b);
      let c = b.map((val) => Math.abs(val));
      // console.log(c);
      if (c.length > 0) {
        let d = c.reduce((total, val) => total + +val, 0);
        setPlus(d);
      } else {
      }
    });
  };
  return (
    <div className="incExp">
      <div className="one">
        <h4 className="money_plus">😍 Income ₹{mPlus}</h4>
      </div>
      <div className="two">
        <h4 className="money_minus">😟 Expense ₹{mMinus} </h4>
      </div>
    </div>
  );
}

export default IncomeEx;
