import React from 'react';
import Card from "../card/card";
import classes from "./party.pcss";

function Party(props) {
  const onCloseHandler = () => {
    console.log('close party!');
  }

  return (
    <div className={classes.party}>
      <h2>party</h2>
      <div className={classes.wrapper}>
        <Card
          onClose={onCloseHandler}
          addedClassName="__party"
          title="Rick"
          isParty/>
        <Card
          onClose={onCloseHandler}
          addedClassName="__party"
          title="Morty"
          isParty/>
      </div>
    </div>
  );
}

export default Party;
