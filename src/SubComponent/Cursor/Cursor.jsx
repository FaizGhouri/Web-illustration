import React, { useState } from 'react';
import './Cursor.css'

const Cursor = () => {

    const [cursorX, setCursorX] = useState();
    const [cursorY, setCursorY] = useState();

    window.addEventListener('mousemove', (e) => {
        setCursorX(e.pageX);
        setCursorY(e.pageY);
    })

    return (

        <div className='Cursor'
            style={{
                left: cursorX + 'px',
                top: cursorY + 'px'
            }}
        >

        </div>
    )
};

export default Cursor;

