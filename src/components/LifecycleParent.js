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

    render() {
        console.log('parent render')
        return (
            <div>
                LifecycleParent
                <LifecycleChild />
            </div>
        )
    }


}

export default LifecycleParent
