import React, { use, useState } from 'react'
import Balance from './Components/Balance'
import TranList from './Components/TranList' 
import IncomeEx from './Components/IncomeEx'
import AddTran from './Components/AddTran'
import Context from './Components/Context'

 function App() {  
    return (
        <>
        <Context>
          <div className='first'> 
              <Balance/>
              <IncomeEx/>
              <TranList/>
              <AddTran/>
         </div>
        </Context>
        </>
    )
}
export default App;
