import React, { useContext, useEffect, useState } from "react";
import { DataNew } from "./Context";

function Balance() {
  const [data, setData] = useContext(DataNew);
  const [final, setFinal] = useState();

  useEffect(() => {
    Do();
  }, [data]);
  const Do = () => {
    let transaction_amount = data.map((val) => val.amount);

    //----Part 1 (greater than zero)
    let positive = transaction_amount.filter((arr) => arr >= 0);
    let abs_income = positive.map((val) => Math.abs(val));
    let income = abs_income.reduce((total, arr) => total + arr, 0);

    // ------Part 2 (smaller than zero)
    let negative = transaction_amount.filter((arr) => arr < 0);
    let abs_expense = negative.map((val) => Math.abs(val));
    let expense = abs_expense.reduce((total, arr) => total + arr, 0);

    //Final Calc
    setFinal(income - expense);
  };
  return (
    <>
      <h2>Your Balance</h2>
      <h2>₹{final}</h2>
    </>
  );
}

export default Balance;
