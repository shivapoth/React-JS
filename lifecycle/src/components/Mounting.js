import React, { Component } from 'react'

export class Mounting extends Component {
   
   static  getDerivedStateFromProps() {
        console.log(" 2. getDerivedStateFromProps LifeCycle Method");
    }
    componentDidMount() {
        console.log("4. componentDidMount LifeCycle Method");
    }
    constructor() {
        super();
        console.log(" 1. Constructor LifrCycle Method ");
    }

    render() {
        console.log("3. Render LifeCycle Method");
        return (
            <div>
                <h1>Mounting </h1>
            </div>
        )
    }
}

export default Mounting
