import { useState } from 'react'
import './App.css'

function App() {
  const [total_amt, setTotal_amt] = useState(0)
  const [atm_value, setAtm_value] = useState({20:0,50:0,100:0})

  function handleChange(e:any){
    setTotal_amt(e.target.value)
  }

  function handleCheck(){
    if(total_amt===10 || total_amt===30){
      alert("You must enter a value multiple of 10 ( except 10 and 30 )")
      setTotal_amt(0)
      setAtm_value({20: 0, 50: 0, 100: 0});
    }
    else{
      const new_values = {20:0,50:0,100:0}
      let amt = total_amt
      while(amt!==0){
        if(amt>=100 && amt-100!==10 && amt-100!==30){
          amt = amt - 100
          new_values[100] = new_values[100] + 1
        }
        else if(amt>=50 && amt-50!==10 && amt-50!==30){
          amt = amt - 50
          new_values[50] = new_values[50] + 1
        }
        else if(amt>=20 && amt-20!==10 && amt-20!==30){
          amt = amt - 20
          new_values[20] = new_values[20] + 1
        }
        else{
          alert("You must enter a value multiple of 10 ( except 10 and 30 )")
          amt=0
        }
      }
      setAtm_value(new_values)
      console.log(new_values)

    }

    return
    
  }

  return (
    <>
      <div><input type='number' placeholder='Amount' value={total_amt} onChange={handleChange}/></div>
      <button type='button' onClick={handleCheck}>Check</button>

      <div className='div-container'>
        <div>
          <span>No. of 20 notes: {atm_value[20]} </span>
          <span>20 * {atm_value[20]}</span>
          <span>{20 * atm_value[20]}</span>
        </div>

        <div>
          <span>No. of 50 notes:{ atm_value[50]} </span>
          <span>50 * {atm_value[50]}</span>
          <span>{50 * atm_value[50]}</span>
        </div>

        <div>
          <span>No. of 100 notes: {atm_value[100]} </span>
          <span>100 * {atm_value[100]}</span>
          <span>{100 * atm_value[100]}</span>
        </div>
      </div>

      <div className='show-total'>Total Amount : {total_amt}</div>
    </>
  )
}

export default App
