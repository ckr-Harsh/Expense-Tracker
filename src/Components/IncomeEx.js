import React, { useContext, useState, useEffect } from "react";
import { DataNew } from "./Context";
import "./incomeEx.css";

function IncomeEx() {
  const [data, setData] = useContext(DataNew);
  const [mPlus, setPlus] = useState();
  const [mMinus, setMinus] = useState();

  useEffect(() => {
    fire();
  }, [data]);

  const fire = () => {
    setMinus((pre) => {
      let a = data.map((val) => val.amount);
      let b = a.filter((val) => val < 0);
      console.log(b);
      if (b <= 0) {
        let d = b.reduce((total, val) => total - val, 0);
        setMinus(d);
      } else {
      }
    });
    setPlus((pre) => {
      let a = data.map((val) => val.amount);
      let b = a.filter((val) => val >= 0);
      console.log(b);
      if (b >= 0) {
        let d = b.reduce((total, val) => +total + +val, 0);
        setPlus(d);
      } else {
      }
    });
  };
  return (
    <div className="incExp">
      <div className="one">
        <h4 className="money_plus">+${mPlus}</h4>
      </div>
      <div className="two">
        <h4 className="money_minus">-${mMinus}</h4>
      </div>
    </div>
  );
}

export default IncomeEx;
