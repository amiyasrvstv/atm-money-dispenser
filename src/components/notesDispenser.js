import React, {Component} from 'react'

export class NotesDispenser extends Component{
    constructor(props) {
        super(props);
      }
      render() {
          if (typeof this.props.notesDispensedObj !== 'undefined' && this.props.notesDispensedObj !== null) 
          {
            let totalNotes = 0;
            return (
                <div>
                    <h3>You will get following amount</h3>
                    {this.props.notesDispensedObj.map((notesdisp, index) => (
                    <p key={index}>{notesdisp.notes} notes of Rs {notesdisp.denomination}</p>
                    ))}
                    {this.props.notesDispensedObj.map((notesdisp, index) => (
                    totalNotes = totalNotes + notesdisp.notes
                    ))}

                    <h3>Total notes dispensed: {totalNotes}</h3>
                </div>
            );
            }
          return (
              <div></div>
          )     
    }
}