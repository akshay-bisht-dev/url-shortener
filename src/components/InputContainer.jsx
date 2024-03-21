import React, { useState } from 'react'

const InputContainer = ({ setInputValue }) => {
    const [value, setValue] = useState("");

    const handleClick = () => {
        setInputValue(value);
        setValue("");
    }

    return (
        <div className='input_container'>
            <h1>URL <span>Shortener</span></h1>
            <input type='text' name='url' required placeholder='Enter URL...' value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={handleClick}>Shorten</button>
        </div>
    )
}

export default InputContainer