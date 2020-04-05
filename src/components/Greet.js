import React from 'react';
//Ez egy function component!

//Így nem szokás használni!
//    
// function Greet(){
//     return <h1>Hello World!</h1>
// }

export const Greet = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Hello {props.name}</h1>
            {props.children}
        </div>
    )
}

export default Greet