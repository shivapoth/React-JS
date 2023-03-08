import React, { Component } from 'react'

export class Updating extends Component {
    static getDerivedStateFromProps(){
        console.log(" 1. getDerivedStateFromProps LifeCycle Method");
    }
    shouldComponentUpdate(){
        console.log(" 2. shouldComponentUpdate LifeCycle Method");
    }

    getSnapshotBeforeUpdate(){
        console.log(" 4. getSnapshotBeforeUpdate LifeCycle Method");
    }
    componentDidUpdate(){
        console.log(" 5. componentDidUpdate LifeCycle Method");
    }
  render() {
    console.log(" 3. Render LifeCycle Method");
    return (
      <div>
        
      </div>
    )
  }
}

export default Updating

