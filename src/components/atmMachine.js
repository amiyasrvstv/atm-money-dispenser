import React, { Component } from 'react'
import './atmMachine.css'

export class AtmMachine extends Component {

    state = {
        notes: [],
        value: '',
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
        this.setState({ value: e.target.value });               
    }

    render(){
        return(
            <div className="atmMachine ui centered card">  
             <div className="content">
                <div className="header">Welcome to ATM</div>
             </div>               
             <div className="content">
                <label>Enter The Amount</label>
                <br/><br/>
                <form onSubmit={this.handleClick}  className="ui form">
                    <div className="field">
                        <input type="text" className="atmAmountField" onChange={this.handleAmount} />
                        </div>
                        <div className="field">
                        <button type="submit" className="fluid ui primary button">Get Money</button>
                    </div>                    
                </form>           
                </div>                  
            </div>
        )
    }

}

