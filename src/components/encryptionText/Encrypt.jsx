import React, { useState, useEffect } from 'react';

const Encryptchar = ({ target }) => {
    const [char, setChar] = useState('');

    useEffect(() => {
        let intervalId;
        let count = 0;

        const updateChar = () => {
            setChar(getRandomChar());
            count++;
            if (count < 5) {
                intervalId = setTimeout(updateChar, Math.random()*500);
            } else {
                setChar(target);
            }
        };

        updateChar();

        return () => clearInterval(intervalId);
    }, [target]);

    function getRandomChar() {
        const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const randomIndex = Math.floor(Math.random() * characters.length);
        return characters[randomIndex];
    }

    return (
        <span >{char}</span>
    );
}

const Encrypt = ({ target }) => {
    return (
        <div className="">
            {target.split('').map((char, index) => (
                <Encryptchar key={index} target={char} />
            ))}
        </div>
    );
}



export default Encrypt;
