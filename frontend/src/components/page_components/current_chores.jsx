import React, { Component } from 'react';
import ChoreDisplay from '../../components/chore_components/chore_display_components/chore_display';


export default class CurrentChores extends Component {
  render() {
    const chores = this.props.chores.map(chore => {
      
      let firstName;
      if (chore.status === "ASSIGNED") {
        firstName = this.props.children[chore.childId].firstName;
      } else {
        firstName = "";
      }
      return (
        <>
          <div className="box" onClick={() => this.props.openModal({modalType: `showChore ${chore.id}`})}>{chore.title} ${chore.amount} {firstName}</div>
        </>
      )
    })

    return (
        <div>
          {chores}
        </div>  
    )
  }
}