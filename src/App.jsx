import React from 'react'
import './App.css'

export default function App() {
    const [text, setText] = React.useState('');

    function handleChange(e) {
        setText(e.target.value);
    }

    function getWordCount(str) {
        alert(str.trim() ? str.trim().split(/\s+/).length : 0);
    }

    return (
        <div className="container">
            <h1>How fast do you type?</h1>
            <textarea value={text} onChange={handleChange}/>
            <section className="info">
                <h4>Time remaining: </h4>
                <h4 onClick={() => getWordCount(text)}>Word count: </h4>
                <button>Start</button>
            </section>
        </div>
    )
}