import React, { Component } from 'react'

export class NotesDispenser extends Component {
      constructor(props) {
        super(props);
      }

      calculateDispense() {
        let output = this.props.getBreakup.sort((a, b) => a.denomination - b.denomination).map((notesdisp, index) => (            
            <p key={index}>{notesdisp.notes} notes of Rs {notesdisp.denomination}</p>
        ))
        return output;
      }

      getRender() {
        if (this.props.getBreakup) {
            let totalNotes = 0;
            return (
                <div>
                    <h3>You will get following amount</h3>
                    { this.calculateDispense() }
                    {this.props.getBreakup.map((notesdisp, index) => (
                    totalNotes = totalNotes + notesdisp.notes
                    ))}

                    <h3>Total notes dispensed: {totalNotes}</h3>
                </div>
            );
            }
          return (
              <div></div>
          ) 
      };

      render() {     
          console.log(this.props.getBreakup);
          return this.getRender();
    }
}