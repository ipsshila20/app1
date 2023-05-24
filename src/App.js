import React, {Component} from 'react'
import Classcomp from './class'
import FunC from './func'
import './App.css';

export class App extends Component {
  constructor() {
    super ()
    this.state = {
      click1: false,
      click2: false 
    }
  }
  render() {
    return (
      
      <div className='parent'>
        <h3 className='h3'>Styling using functional and class component  </h3>
        <div className='main'>
          <button className='button' onClick={() => this.setState({
            click1: !this.state.click1
          })}>Click </button>
          <button className='button' onClick={() => this.setState({
            click2: !this.state.click2
          })}>Click </button>
          <div className='box'>
            {this.state.click1 && <Classcomp/>}
            {this.state.click2 && <FunC />}
          </div>
        </div>
        </div>
        
    )
      
    
  }
}


export default App;
