import React, {Component} from 'react'
//ITt nem kell megadni a props-t
class Welcome extends Component{
    render(){
    return <h1>Hello Class Component! {this.props.name}</h1>
    }
}

export default Welcome
