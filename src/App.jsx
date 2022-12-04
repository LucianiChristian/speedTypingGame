import React from 'react'
import './App.css'

export default function App() {
    const [text, setText] = React.useState('');
    const [time, setTime] = React.useState(5);
    const [isGameActive, setIsGameActive] = React.useState(false);
    const [wordCount, setWordCount] = React.useState(0);

    React.useEffect(() => {
        if(isGameActive && time > 0) {
            secondElapse();
        }
        else if(time === 0) {
            toggleGame();
            setWordCount(getWordCount(text));
        }
    }, [time, isGameActive])

    function handleChange(e) {
        setText(e.target.value);
    }

    function toggleGame() {
        setIsGameActive(prevIsGameActive => !prevIsGameActive);
    }

    function secondElapse() {
        setTimeout(() => {
            setTime(prevTime => prevTime - 1);
        }, 1000);
    }

    function getWordCount(str) {
        return str.trim() ? str.trim().split(/\s+/).length : 0;
    }

    return (
        <div className="container">
            <h1>How fast do you type?</h1>
            <textarea value={text} onChange={handleChange}/>
            <section className="info">
                <h4>Time remaining: {time}</h4>
                <h4>Word count: {wordCount}</h4>
                <button onClick={toggleGame}>Start</button>
            </section>
        </div>
    )
}