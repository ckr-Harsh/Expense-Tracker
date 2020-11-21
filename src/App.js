import React, { use, useState } from "react";
import Balance from "./Components/Balance";
import TranList from "./Components/TranList";
import IncomeEx from "./Components/IncomeEx";
import AddTran from "./Components/AddTran";
import Context from "./Components/Context";
import "./App.css";
import { FormatUnderlined } from "@material-ui/icons";

function App() {
  return (
    <>
      <Context>
        <h1>Expense Tracker</h1>
        <br />
        <div className="container">
          <div className="left">
            <Balance />
            <br />
            <IncomeEx />
            <br />
            <AddTran />
            <br />
          </div>
          <div className="right">
            <TranList />
          </div>
        </div>
      </Context>
    </>
  );
}
export default App;
