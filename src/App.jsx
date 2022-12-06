import React from 'react'
import './App.css'
import useGame from './useGame'

export default function App() {
   const { textAreaRef, text, handleChange, isGameActive, time, wordCount, startGame } = useGame(5);

    return (
        <div className="container">
            <h1>How fast do you type?</h1>
            <textarea ref={textAreaRef} value={text} onChange={handleChange} disabled={!isGameActive}/>
            <section className="info">
                <h4>Time remaining: {time}</h4>
                <h4>Word count: {wordCount}</h4>
                <button onClick={startGame} disabled={isGameActive}>Start</button>
            </section>
        </div>
    )
}