import React from 'react';
import classes from "./card.pcss";
import CloseIcon from '@material-ui/icons/Close';

function card(props) {

  let title = null;
  if (props.isParty) title = <h3>{props.title}</h3>;

  return (
    <div
      className={props.isParty ? [classes.card, classes.is__alt].join(' ') : classes.card}>
      {/* <h3>{props.name}</h3> */}
      {title}
      <img className={classes.cardImg} src={props.image}></img>
      {/* <span
        className={classes.close}
        onClick={() => props.onClose(props.id)}></span> */}
      <CloseIcon
        fontSize="medium"
        className={classes.cardClose}
        onClick={() => props.onClose(props.id)}/>
    </div>
  );
}

export default card;
