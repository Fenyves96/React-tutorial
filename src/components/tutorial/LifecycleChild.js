import React, { Component } from 'react'


class LifecycleChild extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Máté'
        }

        console.log('Consturctor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('child getDerivdedStateFromProps');
        return null;
    }

    componentDidMount() {
        console.log('child componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifecycleChild shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleChild getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('LifecycleChild componentDidUpdate')
    }

    render() {
        console.log('child render')
        return (
            <div>
                LifecycleChild
            </div>
        )
    }


}

export default LifecycleChild
