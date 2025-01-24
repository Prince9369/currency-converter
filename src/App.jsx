import { useState } from 'react'
import './App.css'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyinfo'

function App() {

  const[amount,setAmount]=useState(0)//amount ki values set ki wih default values 0
  const[from,setFrom]=useState("usd")
  const[to,setTo]=useState("inr")
  const[convertedAmount,setConvertedAmount]=useState(0)

  const currencyInfo=useCurrencyInfo(from)

  const options=Object.keys(currencyInfo)

  //swapping for and to
  const swap=()=>{
    setAmount(0);
    setFrom(to);
    setTo(from)
    setConvertedAmount(0);
    // setAmount(convertedAmount)
  }

 const convert=()=>{
  setConvertedAmount(amount*currencyInfo[to])
 } 
  //hamare pas data us value ko product krne pr milegi to amount that we enter * currencyInfo ki value from api data to uske liye currencyInfo[to]

  //Object.keys se hamare pas sari keys aa jayengi
  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/29968366/pexels-photo-29968366/free-photo-of-gold-bitcoin-coins-on-dark-background.jpeg?auto=compress&cs=tinysrgb&w=600')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();//default method ko prevent krne ke liye 
//The e.preventDefault(); method in JavaScript is used to prevent the default action of an event from occurring. This is commonly used in event handlers to stop the browser's default behavior for a given event.
                       convert()//hamara khud k kam jo submit button pe kam krna chahiye
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency)=>setAmount(amount)}
                            selectCurrency={from}
                            onAmountChange={(amount)=>setAmount(amount)}
                            
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                            setFrom={amount}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency)=>setTo(currency)}
                            selectCurrency={to}
                            amountDisable//taki user niche wale field ke amount section ko na change kr paye
                            // onAmountChange={(amount)=>setAmount(amount)}
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                    Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
