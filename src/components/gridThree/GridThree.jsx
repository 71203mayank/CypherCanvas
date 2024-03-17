import React from 'react'
import PFCipher from '../pfc'

export default function GridThree(props) {
    const cipher = new PFCipher(props.keyword);
    const array = cipher.grid.flat()

    return (
    <div className='gridOne'>
        {array.map((id,index) => (
            <div
                    key={index}
                    className='grid-div'
                    style={{
                        backgroundColor:
                            'transparent',
                        color:
                            '#AAAEB3'
                    }}
                >
                    {id}
            </div>
        ))}
    </div>
    )
}
