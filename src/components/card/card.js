import React from 'react';
import classes from "./card.pcss";
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';

function card(props) {

  // let partyCard = null;

  // if (props.isParty) partyCard = <h3>{props.partyPerson}</h3>

  return (
    <div className={classes.card}>
      {/* <h3>{props.name}</h3> */}
      <img className={classes.cardImg} src={props.image}></img>
      <HighlightOffRoundedIcon
        className={classes.cardClose}
        onClick={() => props.onClose(props.id)}/>
    </div>
  );
}

export default card;
