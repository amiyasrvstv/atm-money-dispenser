import React from 'react';
import './App.css';
import { Header } from './components/header';
import { AtmMachine } from './components/atmMachine';
import { NotesDispenser } from './components/notesDispenser';

class App extends React.Component {
  constructor() {
    super();
    this.state = { notes: 0, amount: 0 };
  }
  
  setAmount = (amount) => {
    this.setState({ amount });
  }

  render() {
    return (
      <div className="App">          
        <Header heading={'ATM Money Dispenser'}></Header>
        <div className="ui equal width padded grid">          
          <div className="row">
            <div className="column">
              <AtmMachine getAmount={(amount) => this.setAmount(amount)}></AtmMachine>
            </div>
            <div className="column">              
              <NotesDispenser getBreakup={ this.state.amount }></NotesDispenser>              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
