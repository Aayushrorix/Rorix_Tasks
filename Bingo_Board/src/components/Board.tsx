import React, { useEffect, useState } from 'react'
import './Board.css'

const generateRandomNumber = (): number => {
        return Math.floor(Math.random() * 100); // Random number between 0 and 101
    };

const boardItems = Array.from({ length: 25 },  () => generateRandomNumber())

function Board() {
    // console.log(Math.floor(Math.random() * 100))
    
    const [pendingBoard, setPendingBoard] = useState(() => [...boardItems])
    const [randomNumber, setRandomNumber] = useState<number | null>(null)

    const [newBoardItems, setNewBoardItems] = useState([...boardItems])

    // useEffect(()=>{
    //     console.log(pendingBoard)
    // },[pendingBoard])

    const onStart = () => {
        // console.log("Start.................................");
        // setPendingBoard([...newBoardItems])

        let pendingLength = pendingBoard.length
    
        // Function to process each random number with delay
        const processRandomNumber = () => {
            // Ensure we're working with the latest state of pendingBoard
            
            setPendingBoard(prevPendingBoard => {
                if (prevPendingBoard.length === 0) {
                    pendingLength = 0
                    // console.log("Board is empty!");
                    return prevPendingBoard; // Return current state if board is empty
                }
    
                const tempRandom = Math.floor(Math.random() * 100);
                const newBoard = prevPendingBoard.filter(item => item !== tempRandom);
                // let newBoard = [...prevPendingBoard];
                // newBoard.pop()
    
                // console.log("================>", tempRandom);
                // console.log(">>>>>>>>>>>>", prevPendingBoard);
    
                setRandomNumber(tempRandom);
    
                return newBoard; // Return updated state after filtering
            });
    
            if(pendingLength>0){
                // console.log("==================>>>>>>>>>>>>",pendingBoard)
                setTimeout(processRandomNumber, 50);
            }
        };

        processRandomNumber()
    }

    const onRefresh = ()=> {
        const changedItems = Array.from({ length: 25 },  () => generateRandomNumber())
        setPendingBoard(changedItems)
        setNewBoardItems([...changedItems])
        
    }
    
    return (
        <div className='div-main'>
            Board
            <div className='div-container'>
                <h2>Bingo Board</h2>
                <div>{randomNumber?randomNumber:''}</div>
                <div className='grid-container'>

                    {newBoardItems.map((n,index)=>(
                        <div key={index} className='grid-item'>
                            <div className={pendingBoard.includes(n)? 'item-unselected' : 'item-selected'}>{n}</div>
                        </div>
                    ))}


                </div>
                {pendingBoard.length==0 && <h3 className='win-message'>You Won the Game!!!</h3>}
                <div>
                    <button disabled={pendingBoard.length==0} type='button' className='btn' onClick={onStart}>Start</button>
                    <button type='button' className='btn' onClick={onRefresh}>Refresh</button>
                </div>
            </div>
            
        </div>
    )
}

export default Board