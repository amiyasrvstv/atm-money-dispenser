import React, {Component} from 'react'
import './atmMachine.css'

export class AtmMachine extends Component{
    constructor(props) {
        super(props);
        this.state = {
            notesNumber: []
        };
      }
    denomArr = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

    passToParent = () => {
        this.props.getAmount(this.state.notesNumber);
    }

    handleClick = (e) => {
        e.preventDefault();
        let amountLeft =  this.state.value;
        var notes = 0;
        var notesArr = [];
        this.denomArr.forEach(deno => {
            if (amountLeft >= deno) {
                notes = amountLeft / deno;
                amountLeft = amountLeft % deno;
                notesArr.push({
                    denomination: deno,
                    notes: Math.floor(notes)
                })
            }
        });
        this.setState({notesNumber: notesArr})
        this.passToParent()    
    }

    handleTextBox = (e) =>{        
        this.setState({ value: e.target.value }); 
    }

    render(){
        return(
            <div className="atmMoney">
                <div className="inneratmmoney">
                    <h1>Welcome to ATM</h1>
                    <label>Enter The Amount</label>
                    <br/><br/>
                    <form onSubmit={this.handleClick}>
                        <input type="text" onChange={this.handleTextBox} />
                        <br/><br/>
                        <input type="submit" value="Get Money"/>
                    </form>    
                </div>
                
            </div>
        )
    }

}

