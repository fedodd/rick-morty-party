import React, { useState, useEffect } from 'react';
import classes from "./form.pcss";
//import useRickMortySearch from "./../../hooks/useRickMortySearch";


function Form(props) {

  const [value, setValue] = useState('');
  useEffect(() => {
    console.log('useEffect', value, props);
    props.handleChangeInput(value);
  });

  function useOnChange(value) {
    console.log('useChange', value);
    if (value.length > 2) {
      setValue(value);
    }
  }

  return (
    <form
      className={classes.form}>
      <input
        type="text"
        name="name"
        onChange={(e) => useOnChange(e.target.value)}
        required >
      </input>
    </form>
  );
};

export default Form;
