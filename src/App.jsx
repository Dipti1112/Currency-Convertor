//style={{backgroundImage:`url('https://')`,}}

import { useState } from 'react';
import './App.css'
import useCurr from './assets/hooks/useCurr'
import Input from './components/input';
function App() {
  const[amount,setAmount]=useState(0)
  const[from,setFrom]=useState('usd')
  const[to,setTo]=useState('inr')
  const[convAmt,setConvAmt]=useState(0)
  const currInfo = useCurr(from)
  const options = Object.keys(currInfo)
const swap=()=>{
setFrom(to)
setTo(from)
setConvAmt(amount)
setAmount(convAmt)
}
const convert=()=>{
  setConvAmt(currInfo[to]*amount)
}

  return (
    <>

    <div className='w-full h-screenflex flex-wrap justify-centre items-cetre bg-cover no repeat'>
      <div className='w-full '>
        <div className='w-full max-w-md max-w-border border-gray-60 
        rounded-lg p-5 backdrop-blur-sm bg-white/30'>
        <form onSubmit={(e)=>{
                e.preventDefault();
                convert()
        }}>

          <div className='w-full mb-1'>
          <Input label="From"
           amount={amount} 
           onOptionChange={options} 
           onCurrencyChange={(amount)=>setFrom(amount)}
           selectCurrency={from}
           onAmountChange={(amount)=>setAmount(amount)}
           />
          </div>

          <div className='relative w-full h-0.5'>
            <button type='button' className='absolute left-1/2 -translate-x-1/2 
            -translate-y-1/2 border-2 border-white
            rounded-md bg-blue-600 text-white px-2 py-0.5' onClick={swap}>
         swap
            </button>
          </div>

          <div className='w-full mt1 mb-4'>
            <Input label="To" 
            onOptionChange={options} 
            onCurrencyChange={(currency)=>setTo(currency)}
            selectCurrency={to}
            onAmountChange={(amount)=>setAmount(amount)}
            />
          </div>

          <button type='submit' className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
           onClick={convert}>Convert{from}TO {to}</button>
        </form>

        </div>
      </div>
    </div>
      
     </>
  )
}
;
export default App

