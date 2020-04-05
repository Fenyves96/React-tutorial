import React, { Component } from 'react'
import LifecycleChild from './LifecycleChild';


class LifecycleParent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Máté'
        }

        console.log('Consturctor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('parent getDerivdedStateFromProps');
        return null;
    }

    componentDidMount() {
        console.log('parent componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifecycleParent shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleParent getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('LifecycleParent componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name: 'CodeEvolution'
        })
    }


    render() {
        console.log('parent render')
        return (
            <div>
                LifecycleParent
                <button onClick={this.changeState}>Change state</button>
                <LifecycleChild />
            </div>
        )
    }


}

export default LifecycleParent
