import React, { createContext, useState } from "react";

export const DataNew = createContext();

const Context = (props) => {
  const [data, setData] = useState([
    {
      type: "Salary",
      amount: "+20000",
      key: "amount",
    },
    {
      type: "mortgage",
      amount: "-1300",
      key: "index+1",
    },
  ]);
  return (
    <>
      <DataNew.Provider value={[data, setData]}>
        {props.children}
      </DataNew.Provider>
    </>
  );
};
export default Context;
