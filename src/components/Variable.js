import React, { useState, useEffect } from 'react'

const Variable = () => {
    const [Advice, setAdvice] = useState('')
    function Update() {
        fetch('https://api.adviceslip.com/advice')
            .then(response => response.json())
            .then(data => {
                setAdvice(data.slip.advice);
            })
    }
    useEffect(() => {
        Update();
    }, [])

    return (
        <>
            <div className='heading'>{Advice}</div>
            <button className='button' onClick={() => Update()}> <span>GIVE ME ADVICE!</span> </button>
        </>
    )
}

export default Variable