import React from 'react'
import './App.css'

export default function App() {
    const [text, setText] = React.useState('');

    function handleChange(e) {
        setText(e.target.value);
    }

    return (
        <div className="container">
            <h1>How fast do you type?</h1>
            <textarea value={text} onChange={handleChange}/>
            <section className="info">
                <h4>Time remaining: </h4>
                <h4>Word count: </h4>
                <button>Start</button>
            </section>
        </div>
    )
}