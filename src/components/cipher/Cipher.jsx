import React, {useState, useEffect} from 'react'
import './Cipher.css'
import GridOne from '../gridOne/GridOne';

import PFCipher from '../pfc';


export default function Cipher(props) {
    
    // const str = "un"
    const str = "each who own since want here again keep person right develop new run greath"
    // const str = "coding niggas"
    const keyword = "playfair";
    // const keyword = 'codeinit'
    const cipher = new PFCipher(keyword);
    const [input,setInput] = useState(str)
    const [i,setI] = useState(0);
    const [j,setJ] = useState(0);

    const [one, setOne] = useState('');
    const [two, setTwo] = useState('');

    const [oneSol,setOneSol] = useState(input[i]);
    const [twoSol, setTwoSol] = useState(input[i]);

    const [output,setOutput] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            setJ(prevJ => {
                if(prevJ >= input.length)
                    return prevJ;
            
                if(input[prevJ] === ' ') {
                    if(prevJ + 1 >= input.length)
                        return prevJ + 1;
            
                    setI(prevJ + 1);
                    setOne(input[prevJ + 1]);
                    
                    if(prevJ + 2 >= input.length || input[prevJ + 2] === input[prevJ + 1]) {
                        setTwo('x');
                        return prevJ + 2;
                    } else if(input[prevJ + 2] === ' ') {
                        if(prevJ + 3 >= input.length || input[prevJ + 3] === input[prevJ + 1]) {
                            setTwo('x');
                            return prevJ + 3;
                        } else {
                            setTwo(input[prevJ + 3]);
                            return prevJ + 4;
                        }
                    } else {
                        setTwo(input[prevJ + 2]);
                        return prevJ + 3;
                    }
                } else {
                    setI(prevJ);
                    setOne(input[prevJ]);
                    
                    if(prevJ + 1 >= input.length || input[prevJ] === input[prevJ + 1]) {
                        setTwo('x');
                        return prevJ + 1;
                    } else if(input[prevJ + 1] === ' ') {
                        if(prevJ + 2 >= input.length || input[prevJ + 2] === input[prevJ]) {
                            setTwo('x');
                            return prevJ + 2;
                        } else {
                            setTwo(input[prevJ + 2]);
                            return prevJ + 3;
                        }
                    } else {
                        setTwo(input[prevJ + 1]);
                        return prevJ + 2;
                    }
                }
            });

        }, 500); // Increment i and j every 5 seconds

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if(one === '' || two === '')
            return;

        setOneSol(cipher.enCords(one.toUpperCase() + two.toUpperCase()).text[0].toLowerCase())
        setTwoSol(cipher.enCords(one.toUpperCase() + two.toUpperCase()).text[1].toLowerCase())
        setOutput(out => out.concat(cipher.enCords(one.toUpperCase() + two.toUpperCase()).text.toLowerCase()))
    }, [one, two])



    return (
    <div className='cipher'>
        <div className='cipher-container'>    
            <div className='cipher-input-container  text-container'>
                
                <span style={{color:'#D2DFF4'}}>{input.substring(0,i)}</span>
                <span style={{color:'#F2C17B'}}>{input.substring(i,j)}</span>
                <span style={{color:'#AAAEB3'}}>{input.substring(j)}</span>
            </div>
            <div className='cipher-animation-container'>
                <GridOne
                    keyword = {keyword}
                    first = {one}
                    second = {two}
                />
                <div className='pair-animator'>
                    <div className='char-container'>{one}</div>
                    <div className='char-container'>{two}</div>
                    <div className='char-container' style={{color:'#D2DFF4'}}>
                        <span className='output-span-one'>{oneSol}</span>    
                    </div>
                    
                    <div className='char-container' style={{color:'#D2DFF4'}}>
                        <span className='output-span-two'>{twoSol}</span>
                    </div>
                    {/* <div className='char-container'>{cipher.enCords(one.toUpperCase() + two.toUpperCase()).text[0].toLowerCase()}</div>
                    <div className='char-container'>{cipher.enCords(one.toUpperCase() + two.toUpperCase()).text[1].toLowerCase()}</div> */}
                </div>
            </div>
            <div className='cipher-output-container text-container' style={{color:'#D2DFF4'}}>{output}</div>
        </div>
    </div>
    )
}


