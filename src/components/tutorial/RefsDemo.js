//Hova kerüljön a focus

import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        //1.
        this.inputRef = React.createRef()
        //callback
        this.cbRef = null
        this.setCbRef = (element) => {
            this.cbRef = element
        }
    }

    componentDidMount() {
        //3.
        //this.inputRef.current.focus()
        //console.log(this.inputRef)
        if (this.cbRef) {
            this.cbRef.focus()
        }
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }

    render() {
        return (
            <div>
                {//2.
                }
                <input type='text' ref={this.inputRef} />
                <input type='text' ref={this.setCbRef} />
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
