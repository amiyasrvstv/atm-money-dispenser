import React, { Component } from 'react'
import './atmMachine.css'

export class AtmMachine extends Component {

    state = {
        notes: []
    };

    constructor(props) {
        super(props);        
    }

    denominations = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

    updateParent = () => {
        this.props.getAmount(this.state.notes);
    }

    handleClick = async (e) => {
        e.preventDefault();
        let amountLeft =  this.state.value;
        let notes = 0;
        let notesArr = [];
        this.denominations.forEach(amount => {
            if (amountLeft >= amount) {
                notes = amountLeft / amount;
                amountLeft = amountLeft % amount;
                notesArr.push({
                    denomination: amount,
                    notes: Math.floor(notes)
                })
            }
        });        
        await this.setState({ notes: notesArr })
        this.updateParent()    
    }

    handleAmount = (e) =>{        
        this.state = { value: e.target.value };        
    }

    render(){
        return(
            <div className="atmMachine">                
                <h1>Welcome to ATM</h1>
                <label>Enter The Amount</label>
                <br/><br/>
                <form onSubmit={this.handleClick}>
                    <input type="text" onChange={this.handleAmount} />
                    <br/><br/>
                    <input type="submit" value="Get Money"/>
                </form>    
            </div>
        )
    }

}

