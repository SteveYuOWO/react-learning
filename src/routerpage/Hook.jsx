import React, { useState } from 'react'

function Hook(props) {
    let [val, setVal] = useState(0)
    let [val2, setVal2] = useState('123')
    return (
        <div>
            111
            <h1>{val}</h1> <br/>
            <h1>{val2}</h1> <br/>
            <button onClick={()=>{setVal(val + 1)}}>PLUS</button>
            <button onClick={()=>{setVal2(val2 + '1')}}>PLUS</button>
        </div>
    )
}

export default Hook;