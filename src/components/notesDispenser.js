import React, { Component } from 'react';

export class NotesDispenser extends Component {
      constructor(props) {
        super(props);
      }

      calculateDispense() {
        let totalNotes = 0;
        let output = this.props.getBreakup.sort((a, b) => a.denomination - b.denomination).map((note, index) => (            
            <tr>
                <td key={index}>{note.notes} notes of Rs {note.denomination} <span style={{display: 'none'}}>{totalNotes += note.notes}</span></td>            
            </tr>
        ))
        return { output, totalNotes };
      }

      getRender() {
        if (this.props.getBreakup) {            
            let { output, totalNotes } = this.calculateDispense();
            return (
                <table class="ui very basic table">
                    <thead>      
                        <th>You will get following amount</th>
                    </thead>
                    { output }                    
                    <h3>Total notes dispensed: { totalNotes }</h3>
                </table>
            );
            }
          return (
              <div></div>
          ) 
      };

      render() {     
          return this.getRender();
      }
}