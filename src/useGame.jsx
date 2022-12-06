import React from 'react';

export default function useGame(startTime = 10) {
    const STARTING_TIME = 5;

    const [text, setText] = React.useState('');
    const [time, setTime] = React.useState(STARTING_TIME);
    const [isGameActive, setIsGameActive] = React.useState(false);
    const [wordCount, setWordCount] = React.useState(0);
    const textAreaRef = React.useRef(null);

    React.useEffect(() => {
        if(isGameActive && time > 0) {
            secondElapse();
        }
        else if(time === 0) {
            stopGame();
            setWordCount(getWordCount(text));
        }
    }, [time, isGameActive])

    function handleChange(e) {
        setText(e.target.value);
    }

    function startGame() {
        setIsGameActive(true);
        setText("");
        setTime(STARTING_TIME);
        setWordCount(0);
        textAreaRef.current.disabled = false;
        textAreaRef.current.focus();   
    }

    function stopGame() {
        setIsGameActive(false);
    }

    function secondElapse() {
        setTimeout(() => {
            setTime(prevTime => prevTime - 1);
        }, 1000);
    }

    function getWordCount(str) {
        return str.trim() ? str.trim().split(/\s+/).length : 0;
    }


    return { textAreaRef, text, handleChange, isGameActive, time, wordCount, startGame };
}