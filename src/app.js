
import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import Form from "./components/form/form";
import Results from "./components/results/results";
import Party from "./components/party/party";
import classes from "./app.pcss";

const App = () => {

  const [requestName, setRequestName] = useState('');
  const [selectedPerson, setSelectedPerson] = useState();

  return (
      <div className={classes.App}>
        <Form handleChangeInput={setRequestName}/>
        <Results
          requestName={requestName}
          handleSelectPerson={setSelectedPerson}/>
        <Party
          person={selectedPerson}/>
      </div>);
};

export default hot(App);
