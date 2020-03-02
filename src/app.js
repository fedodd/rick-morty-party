
import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import Form from "./components/form/form";
import Results from "./components/results/results";
import Party from "./components/party/party";
import classes from "./app.pcss";

const App = () => {

  const [requestName, setRequestName] = useState('');
  const [selectedRick, setRick] = useState({});
  const [selectedMorty, setMorty] = useState({});

  const handlePickPerson = (person) => {
    // maybe better to check 'rick' with string.toLowerCase().includes('rick'), cause maybe there will be 'RICK' o something like this in the future. same with 'Morty'.
    if (person.name.includes('Rick')) {
      setRick(person);
    } else if (person.name.includes('Morty')) {
      setMorty(person);
    }
  }

  const handleClosePartyPerson = (person) => {
    if (person === 'Rick') {
      setRick({});
    } else if (person === 'Morty') {
      setMorty({});
    }
  }

  return (
    <div className={classes.App}>
      <Form handleChangeInput={setRequestName}/>
      <Results
        requestName={requestName}
        onPickPerson={handlePickPerson}/>
      <Party
        selectedRick={selectedRick}
        selectedMorty={selectedMorty}
        onCloseHandler={handleClosePartyPerson}
        />
    </div>);
};

export default hot(App);
