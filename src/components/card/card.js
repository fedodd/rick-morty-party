import React from 'react';
import classes from "./card.pcss";
import CloseIcon from '@material-ui/icons/Close';

function card(props) {

  let title = null;
  if (props.isParty) title = <h3>{props.title}</h3>;

  return (
    <div
      onClick={()=>props.onPick(props.id)}
      className={props.isParty ? [classes.card, classes.is__alt].join(' ') : classes.card}>
      {title}
      <img className={classes.cardImg} src={props.image}></img>
      {/* make inline style of material icon size same as in figma */}
      <CloseIcon
        className={classes.cardClose}
        style={{'width': '30px', 'height': '30px', 'padding': '6px'}}
        onClick={() => props.onClose(props.id)}/>
    </div>
  );
}

export default card;
