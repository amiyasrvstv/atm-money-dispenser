import React from 'react';
import './App.css';
import { Header } from './components/header';
import { AtmMachine } from './components/atmMachine';
import { NotesDispenser } from './components/notesDispenser';

class App extends React.Component {
  constructor() {
    super();
    this.state = { notes: 0 };
  }
  
  setAmount = (amount) => {
    this.setState({ notesFromAtm: amount });
  }

  render() {
    return (
      <div className="App">          
        <Header heading={'ATM Money Dispenser'}></Header>
        <AtmMachine getAmount={(amount) => this.setAmount(amount)}></AtmMachine>
        <NotesDispenser></NotesDispenser>
      </div>
    );
  }
}

export default App;
