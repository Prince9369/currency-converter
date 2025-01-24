//input box ke liye 

import React,{useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectCurrency="usd",
    amountDisable=false,
    currencyDisable=false,
    
    className = "",
}) {
   

    //ADDITIONAL OPTIMIZATION USING USEID HOOKS
    //useId is a React Hook for generating unique IDs that can be passed to accessibility attributes.
    const amountInputId=useId()

    //The useId hook in React is used to generate a unique ID that can be used for accessibility purposes, such as associating a label with an input element. This is particularly useful when you need to ensure that the ID is unique across multiple instances of a component.

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>{/* js ke backticks ke andrd hai kyoki ye users se ek css bhi le rhe hai*/}
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}//field enable ya hai disable ye check krne ke liye
                    value={amount}
                    onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
                    //do do bar likha hai kyoki agr onAmounnt change khali ho to checkna ho .The function checks if onAmountChange is defined (i.e., it is not null or undefined). This is done using the && operator.
                    //Number is liye likha kyoki e se aanea walivalues string me hoti haai and hamara type number hai
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}//default me usd selecet ho jayega as it is given in selectCurrwncy
                    onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
                    //do do bar liya kyoki same logic as onAmountChange
                    //data string me aati hai to ham change nhi krenge is bar kyoki hamaar value string me hai ex=>"Usd"
                    disabled={currencyDisable}
                >
                    {currencyOptions.map((currency)=>(
                         <option key={currency} value={currency}>
                         {currency}
                     </option>
                     //jb value repeat hoti hai to react ki perffomance down ho jati hai
                     //to jab bhi hm aise jsx ke andr loops lagate hai to ek key pass krte hai 
                     //to agar perfromannce lani hai loop ke andrelement sbko repeat krne ke liye to hame key passkrni chahiye

                    ))}
                       
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
