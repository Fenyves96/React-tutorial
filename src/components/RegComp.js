import React, { Component } from 'react'

class RegComp extends Component {
    render() {
        console.log('regular render')
        return (
            <div>
                RegularComponent {this.props.name}
            </div>
        )
    }
}

export default RegComp
