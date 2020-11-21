import React, { useContext, useState } from "react";
import { DataNew } from "./Context";
import "./AddTran.css";

function AddTran() {
  const [text, setText] = useState();
  const [amount, setAmount] = useState();
  const [Type, setType] = useState("");

  const [data, setData] = useContext(DataNew);

  const Changed = (e) => {
    setText(e.target.value);
  };
  const Changed2 = (e) => {
    setAmount(e.target.value);
  };
  const Changed3 = (e) => {
    setType(e.target.value);
  };
  const Add = () => {
    //  e.preventDefault();
    if (Type == "Credit") {
      setData((preState) => [
        ...preState,
        { type: text, amount: `+${amount}`, key: amount + 1 },
      ]);
    } else {
      setData((preState) => [
        ...preState,
        { type: text, amount: `-${amount}`, key: amount - 1 },
      ]);
    }
    setAmount("");
    setText("");
  };

  return (
    <>
      <div className="transac-block">
        <h3>Add new Transaction</h3>
        <br />
        <label>Transaction Type:</label> &nbsp;
        <select value={Type} onChange={Changed3} defaultValue="Credit">
          <option value="Debit" name="debit">
            Debit
          </option>
          <option value="Credit" name="credit">
            Credit
          </option>
        </select>
        <div className="form-control">
          <label htmlFor="text">Text:</label>
          <input
            value={text}
            type="text"
            onChange={Changed}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount:</label>
          <input
            value={amount}
            type="number"
            onChange={Changed2}
            placeholder="Enter Amount"
          />
        </div>
        <br />
        <button className="Add" onClick={Add}>
          Add Transaction
        </button>
      </div>
    </>
  );
}

export default AddTran;
