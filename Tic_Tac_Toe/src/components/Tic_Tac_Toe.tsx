import React, { useEffect, useState } from 'react'
import './Tic_Tac_Toe.css'

function Tic_Tac_Toe() {

  const [tableItems, setTableItems] = useState<(number|string)[]>([0,0,0,0,0,0,0,0,0])
  const [turn, setTurn] = useState('o')
  const [win, setWin] = useState<number|string>('n')
  
  useEffect(()=>{
    checkWin()
  },[win,tableItems])

  function checkWin(){
    if(tableItems[0]!==0 && tableItems[0]===tableItems[3] && tableItems[0]===tableItems[6]){
      setWin(tableItems[0])
    }
    else if(tableItems[0]!==0 && tableItems[0]===tableItems[1] && tableItems[0]===tableItems[2]){
      setWin(tableItems[0])
    }
    else if(tableItems[0]!==0 && tableItems[0]===tableItems[4] && tableItems[0]===tableItems[8]){
      setWin(tableItems[0])
    }
    else if(tableItems[1]!==0 && tableItems[1]===tableItems[4] && tableItems[1]===tableItems[7]){
      setWin(tableItems[1])
    }
    else if(tableItems[2]!==0 && tableItems[2]===tableItems[5] && tableItems[2]===tableItems[8]){
      setWin(tableItems[2])
    }
    else if(tableItems[2]!==0 && tableItems[2]===tableItems[4] && tableItems[2]===tableItems[6]){
      setWin(tableItems[2])
    }
    else if(tableItems[6]!==0 && tableItems[6]===tableItems[7] && tableItems[6]===tableItems[8]){
      setWin(tableItems[6])
    }
    else if(tableItems[3]!==0 && tableItems[3]===tableItems[4] && tableItems[3]===tableItems[5]){
      setWin(tableItems[3])
    }
  }

  function handleOnClick(index:number){
    handleClick(index)
    checkWin()
  }

  function handleClick(index:number){
    if(tableItems[index]===0){
      const currTable = [...tableItems]
      currTable[index] = turn
      if(turn==='o'){
        setTurn('x')
      }
      else{
        setTurn('o')
      }
      setTableItems(currTable)
    }
  }

  function handleRefresh(){
    setWin('n')
    setTableItems([0,0,0,0,0,0,0,0,0])
    setTurn('o')
  }

  return (
    <div className='div-main'>
      <div className='div-container'>
          <h2>Tic_Tac_Toe</h2>

          <h3>{turn}'s Turn</h3>

          <div className='grid-container'>

            {tableItems.map((e,index)=>(
              <div key={index} className='grid-item' onClick={() => (win=='n'?handleOnClick(index):'')}>{e!==0?e:''}</div>
            ))}

           
          </div>
            {win!=='n' && <h2 className='win-message'> Congratulations {win} Won!</h2>}
            {win=='n' && !tableItems.includes(0) && <h2 className='win-message'> Match Tie!</h2>}
          
      </div>

        <div>
            <button type='button' onClick={handleRefresh} className='btn' >Refresh</button>
        </div>
    </div>
  )
}

export default Tic_Tac_Toe