import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler('child')}>ChildButton</button>
        </div>
    )
}

export default ChildComponent
