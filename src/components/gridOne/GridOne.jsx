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

        // let topLeft = [ Math.min(inp[0][0], inp[1][0]), Math.min(inp[0][1], inp[1][1]) ];
        // let topRight = [ Math.min(inp[0][0], inp[1][0]), Math.max(inp[0][1], inp[1][1]) ];
        // let bottomLeft = [ Math.max(inp[0][0], inp[1][0]), Math.min(inp[0][1], inp[1][1]) ];
        // let bottomRight = [ Math.max(inp[0][0], inp[1][0]), Math.max(inp[0][1], inp[1][1]) ];

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
        // highlight the rectangle

        // let inputOne = inp[0][0]*5 + inp[0][1];
        // let outputOne = out[0][0]*5 + out[0][1];                
        // let inputTwo = inp[1][0]*5 + inp[1][1];
        // let outputTwo = out[1][0]*5 + out[1][1];

        // Set indices for inputOne, inputTwo, outputOne, and outputTwo
        setInputOne(inp[0][0] * 5 + inp[0][1]);
        setInputTwo(inp[1][0] * 5 + inp[1][1]);
        setOutputOne(out[0][0] * 5 + out[0][1]);
        setOutputTwo(out[1][0] * 5 + out[1][1]);

        // get the coordinates of the 1st encryption

        // get the coordinates of the 2nd encryption
    }, [props])

    const array = cipher.grid.flat()
    return (
    <div className='gridOne'>
        {array.map((id,index) => (
            // <div
            //         key={index}
            //         className='grid-div'
            //         style={{backgroundColor:children.includes(index)? 'white' : 'transparent'}}
            //     >
            //         {id} {index}
            //     </div>

            <div
                    key={index}
                    className='grid-div'
                    style={{
                        backgroundColor:
                            inputOne === index
                                ? '#F2C17B'
                                : inputTwo === index
                                ? 'yellow'
                                : outputOne === index
                                ? '#F2C17B'
                                : outputTwo === index
                                ? 'yellow'
                                : children.includes(index)
                                ? 'white'
                                : 'transparent',
                        color:
                            inputOne === index ? 'black':
                            inputTwo === index ? 'black':
                            outputOne=== index ? 'black':
                            outputTwo=== index ? 'black':
                            children.includes(index)? 'black':
                            '#AAAEB3'
                    }}
                >
                    {id}
                </div>
        ))}
    </div>
    )
}
