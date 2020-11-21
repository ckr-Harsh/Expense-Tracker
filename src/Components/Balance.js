import React, { useContext } from "react";
import { DataNew } from "./Context";

function Balance() {
  const [data, setData] = useContext(DataNew);
  return (
    <>
      <h2>Your Balance</h2>
      <h2>$</h2>
    </>
  );
}

export default Balance;
