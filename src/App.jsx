import React from 'react'
import './App.css'

export default function App() {
    return (
        <div className="container">
            <h1>How fast do you type?</h1>
            <textarea />
            <section className="info">
                <h4>Time remaining: </h4>
                <h4>Word count: </h4>
                <button>Start</button>
            </section>
        </div>
    )
}