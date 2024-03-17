import React, { useState, useEffect } from 'react'
import PFCipher from '../pfc';
import GridThree from '../gridThree/GridThree';

// an array wordlist consisting of 20 words whose length is between 4-6 letters
const wordList = [
    'about', 'above', 'after', 'again', 'below', 'could', 'every', 'first', 'found', 'great',
    'house', 'large', 'learn', 'never', 'other', 'place', 'plant', 'point', 'right', 'small'
];

export default function Game() {
    const [ key, setKey ] = useState('playfair');
    const [ words, setWords ] = useState([]);

    const randomKey = () => {
        let key = '';
        for (let i = 0; i < 5; i++) {
            key += String.fromCharCode(Math.floor(Math.random() * 26) + 65);
        }
        return key;
    }

    useEffect(() => {
        setKey(randomKey());
        setWords(wordList.sort(() => Math.random() - 0.5).slice(0, 5));
    }, []);

    return (
    <div className='cipher'>
        <div className='cipher-container'>    
            
            <div className='cipher-animation-container'>
                <GridThree
                    keyword = {key}
                />
                
                <div>
                    {
                        words.map((word, index) => (
                            <TestBox
                                key={index}
                                word={word}
                                keyword={key}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
    )
}

const TestBox = ({ word, keyword }) => {
    const validate = "✔";
    const [ out, setOut] = useState('');
    const [ inp, setIn ] = useState('');

    useEffect(() => {
        const cipher = new PFCipher(keyword);
        let temp = '', i = 0;
        
        while(i < word.length) {
            if(i + 1 >= word.length || word[i] === word[i+1]) {
                temp += cipher.enCords(word[i] + 'X').text;
                i++;
            } else {
                temp += cipher.enCords(word[i] + word[i+1]).text;
                i += 2;
            }
        }

        setOut(temp);
    }, [word, keyword]);

    return (
        <div>
            <label>{word}</label>
            <input type='text' onChange={e => setIn(e.target.value.toUpperCase())}/>
            {
                (out === inp)? <label>{validate}</label> : <></>
            }
        </div>
    )
}
