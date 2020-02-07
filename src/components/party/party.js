import React from 'react';
import Card from "../card/card";
import classes from "./party.pcss";

function Party(props) {

  return (
    <div className={classes.party}>
      <h2>party</h2>
      <div className={classes.wrapper}>
        <Card
          onClose={() => props.onCloseHandler('Rick')}
          addedClassName="__party"
          title="Rick"
          data={props.selectedRick}
          isParty/>
        <Card
          onClose={() => props.onCloseHandler('Morty')}
          addedClassName="__party"
          title="Morty"
          data={props.selectedMorty}
          isParty/>
      </div>
    </div>
  );
}

export default Party;
