import React, { Component } from 'react'
import BoilingVerdict from "./BoilingVerdict"
class Calculator extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { temperature: "" };
    }
    handleChange(e) {
        this.setState({ temperature: e.target.value });
    }
    render() {
        return (
            <div className='container  '>
                <form>

                    <label className='form-label'>Enter Temperature</label>
                    <input className='form-control ' type="text" value={this.state.temperature} onChange={this.handleChange} />
                    <br/>
                    <button  className='btn btn-primary'>Submit</button>
                    <p>{this.state.temperature}</p>
                    <BoilingVerdict celsius={parseFloat(this.state.temperature)} />

                </form>

            </div>
        )
    }
}
export default Calculator