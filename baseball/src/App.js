import React from 'react';
import Display from  './components/Display';
import Dashboard from './components/Dashboard';
import './App.css';

class App extends React.Component {

  state = {
    Balls: 0,
    Strikes: 0,
    Outs: 0
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Baseball Game</h1>
        </header>
        <main>
          <Display 
            getBalls={this.getBalls} 
            getStrikes={this.getStrikes}
            getOuts={this.getOuts}
          />
          <Dashboard 
            setStrike={this.setStrike}   
            setBall={this.setBall}
            setHit={this.setHit}
            setFoul={this.setFoul}
          />
        </main>
      </div>
    );
  }

  getBalls = () => {
    return this.state.Balls;
  }

  getStrikes = () => {
    return this.state.Strikes;
  }

  getOuts = () => {
    return this.state.Outs;
  }

  setStrike = () => {
    if(this.state.Strikes === 2) 
      this.setState({...this.state, Strikes:0})
    else
      this.setState({...this.state, Strikes:this.state.Strikes+1})
  }

  setBall = () => {
    if(this.state.Balls === 3)
      this.setState({...this.state, Balls:0})
    else
      this.setState({...this.state, Balls:this.state.Balls+1})
  }
  setHit = () => {
    this.setState({Balls:0, Strikes:0})
  }
  setFoul =  () => {
    if(this.state.Strikes < 2) {
      this.setState({...this.state, Strikes:this.state.Strikes+1})
    }
  }
}

export default App;
