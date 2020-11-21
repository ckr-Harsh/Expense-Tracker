import React, { useContext } from 'react'
import {DataNew} from './Context'

function Balance() {
    const [data,setData] =useContext(DataNew);
    return (
        <>
            <h1>Expense Tracker</h1>
            <h2>Your Balalnce</h2>
            <h2 >$</h2>
        </>
    )
}

export default Balance
