import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'

class ParentRegComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Máté'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Máté'
            })
        }, 2000)
    }

    render() {
        console.log('Parent render')
        return (
            <div>
                ParentRegComp
                <RegComp name={this.state.name}></RegComp>
                <PureComp name={this.state.name}></PureComp>
            </div>
        )
    }
}

export default ParentRegComp
