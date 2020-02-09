import React from 'react';
import classes from "./card.pcss";
import CloseIcon from '@material-ui/icons/Close';

function card(props) {

  let title = null;
  if (props.isParty) title = <h3>{props.title}</h3>;


  return (
    <div className={props.isParty ? [classes.card, classes.is__alt].join(' ') : classes.card}>
      <div
        className={classes.cardImgBox}
        onClick={props.isParty ? null : () => props.onPick(props.data)}>
        {title}
        <img
          alt=""
          className={classes.cardImg}
          src={props.data.image}></img>
      </div>
      {/* make inline style of material icon size same as in figma */}
      <CloseIcon
        className={classes.cardClose}
        style={{'width': '30px', 'height': '30px', 'padding': '6px'}}
        onClick={() => props.onClose(props.data.id)}/>
    </div>
  );
}

export default card;
