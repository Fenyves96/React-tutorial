//Conditional Rendering
import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggeIn: false
        }
    }


    render() {

        return (
            this.state.isLoggeIn ?
                <div>Welcome User!</div> :
                <div>Welcome Guest!</div>
        )

        // let message
        // if (this.state.isLoggeIn)
        //     message = <div>Welcome User!</div>
        // else
        //     message = <div>Welcome Guest!</div>

        // return <div>message</div>
        // if (this.state.isLoggeIn) {
        //     return <div>Welcome User!</div>
        // }
        // else {
        //     return <div>Welcome Guest!</div>
        // }

    }
}

export default UserGreeting
