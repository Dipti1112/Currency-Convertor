import React from 'react'

function Input({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    onOptionChange=[], 
    selectCurrency="usd",
    amountDisable="false",
    currencyDisable="false",
    className=""
}) {

return(
    <div className={`bg-white p-3 rounded text-sm flex ${className}`}>
      <label className='text-black mb-2'>{label}</label>
      <input className='outline-none w-full bg-transparent py-1.5'
      type='number'
      placeholder='amount'
      disabled={amountDisable}
      onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
      />

       <div className="w-1/2 flex flex-wrap justify-end text-right">
       <p className='text-black/40 mb-2 full'>Currency Type</p>
       <select className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none' value={selectCurrency} 
          onChange={(e)=>onAmountChange && onAmountChange(e.target.value)}
          disabled={currencyDisable}>
           {onOptionChange.map((currency)=>(
         <option key={currency} value={currency}> {currency} </option>
            ))} 
    </select>
      </div>
</div>

)}

export default Input


// function input(
//   label,amount,onAmountChange,onCurrencyChange,optionChange,selectCurrency="usd",currencyDisable=false,amountDisable=false,className=""
// ){
  
// <div className={`bg-white p-3 rounded${className}`}>
//   <div className="w-1/2">
//   <label className="text-black">{label}</label>
//     <input className=" "
//     type="number"
//     placeholder="Amount"
//     disabled={amountDisable} 
//     value={amount}
//     onClick={(e)=>{onAmountChange && onAmountChange(Number(e.target.value))}}

//     />
//   </div>

//   <div className="w-1/2 flex-wrap">
//     <p className="text-black">  Currency Type  </p>
//       <select className="rounded cursor-pointer">

//       </select>
  
//   </div>
// </div>



// }


