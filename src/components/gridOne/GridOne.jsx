import React, {useEffect, useState} from 'react'
import './GridOne.css'
import PFCipher from '../pfc'

export default function GridOne(props) {
    const cipher = new PFCipher(props.keyword);

    const [children, setChildren] = useState([]);

    const [inputOne, setInputOne] = useState(-1);
    const [inputTwo, setInputTwo] = useState(-1);
    const [outputOne, setOutputOne] = useState(-1);
    const [outputTwo, setOutputTwo] = useState(-1);

    const [outputOneBlinking, setOutputOneBlinking] = useState(false);
    const [outputTwoBlinking, setOutputTwoBlinking] = useState(false);

    useEffect(() => {
        // get the coordinates of first letter
        let leftBound, rightBound, topBound, bottomBound;
        if(props.first === '' || props.second === '') {
            leftBound = rightBound = topBound = bottomBound = -1;
            setChildren([]);
            return;
        }

        const { inp, out, text } = cipher.enCords(props.first.toUpperCase() + props.second.toUpperCase())
        // get the coordinates of the 2nd letter

        leftBound = Math.min(inp[0][1], inp[1][1]);
        rightBound = Math.max(inp[0][1], inp[1][1]);
        topBound = Math.min(inp[0][0], inp[1][0]);
        bottomBound = Math.max(inp[0][0], inp[1][0]);

        if(leftBound === rightBound) {
            topBound = 0;
            bottomBound = 4;
        }
        if(topBound === bottomBound) {
            leftBound = 0;
            rightBound = 4;
        }

        // console.log(leftBound, rightBound, topBound, bottomBound)

        // const childIndices = [];
        const childArray = [];
        for(let i = topBound; i <= bottomBound; i++) {
            for(let j = leftBound; j <= rightBound; j++) {
                // console.log(j*5 + i);
                let child = i*5 + j;
                childArray.push(child);
            }
        }
        setChildren(childArray);

        // Set indices for inputOne, inputTwo, outputOne, and outputTwo
        setInputOne(inp[0][0] * 5 + inp[0][1]);
        setInputTwo(inp[1][0] * 5 + inp[1][1]);
        setOutputOne(out[0][0] * 5 + out[0][1]);
        setOutputTwo(out[1][0] * 5 + out[1][1]);

        // Trigger blinking effect for outputOne and outputTwo
        setTimeout(() => {
            setOutputOneBlinking(true);
            setTimeout(() => {
                setOutputOneBlinking(false);
                setTimeout(() => {
                    setOutputOneBlinking(true);
                    setTimeout(() => {
                        setOutputOneBlinking(false);
                        setTimeout(() => {
                            setOutputTwoBlinking(true);
                            setTimeout(() => {
                                setOutputTwoBlinking(false);
                                setTimeout(() => {
                                    setOutputTwoBlinking(true);
                                    setTimeout(() => {
                                        setOutputTwoBlinking(false);
                                    }, 500);
                                }, 500);
                            }, 500);
                        }, 2000);
                    }, 500);
                }, 500);
            }, 500);
        }, 500);


    }, [props])




    const array = cipher.grid.flat()
    return (
    <div className='gridOne'>
        {array.map((id,index) => (
            // <div
            //         key={index}
            //         className='grid-div'
            //         style={{
            //             backgroundColor:
            //                 inputOne === index ? '#F2C17B':
            //                 inputTwo === index ? 'yellow' :
            //                 children.includes(index)? 'white'
            //                 : 'transparent',
            //             color:
            //                 inputOne === index ? 'black':
            //                 inputTwo === index ? 'black':
            //                 outputOne=== index ? 'black':
            //                 outputTwo=== index ? 'black':
            //                 children.includes(index)? 'black':
            //                 '#AAAEB3'
            //         }}
            //     >
            //         {id}
            //     </div>

            <div
                    key={index}
                    className={`grid-div ${outputOneBlinking && outputOne === index ? 'blinking-red' : ''} ${outputTwoBlinking && outputTwo === index ? 'blinking-blue' : ''}`}
                    style={{
                        backgroundColor:
                            inputOne === index ? '#FFDE59' :
                            inputTwo === index ? '#FF914D' :
                            children.includes(index) ? 'white' : 'transparent',
                        color:
                            children.includes(index) ? 'black' : '#AAAEB3'
                    }}
                >
                    {id}
                </div>
        ))}
    </div>
    )
}



                        // backgroundColor:
                        //     inputOne === index
                        //         ? '#F2C17B'
                        //         : inputTwo === index
                        //         ? 'yellow'
                        //         : outputOne === index
                        //         ? '#F2C17B'
                        //         : outputTwo === index
                        //         ? 'yellow'
                        //         : children.includes(index)
                        //         ? 'white'
                        //         : 'transparent',
