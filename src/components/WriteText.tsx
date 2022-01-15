import React, { useState, useEffect } from 'react';

const words = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

type Props = {
    text: string
}

const WriteText = ({text}: Props) => {
    let [curText, writeText] = useState('');
    let [curLength, setCurLength] = useState(-1);
    let [loops, setLoops] = useState(0);

    useEffect(() => {
        let interval: any | Function;
        if (curLength < text.length) {
            interval = setInterval(() => {
                if (loops / 3 === 1) {setLoops(0); setCurLength(curLength => curLength = curLength+1);}
                setLoops(loops => loops = loops+1);
    
                let string = '';
                for (let i = 0; i <= curLength; i++) { string+=text[i]; }
                
                if (curLength >= text.length-1) {
                    writeText(text);
                    return () => clearInterval(interval);
                }
        
                string += words[Math.floor(Math.random() * words.length)];
                writeText(string);
            }, 60);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    });

    return (<span>{curText}</span>)
}

export default WriteText;