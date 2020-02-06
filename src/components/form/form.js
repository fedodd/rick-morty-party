import React, { useState, useEffect, useRef } from 'react';
import classes from "./form.pcss";
import _ from 'lodash';

function Form(props) {

  //set value only after it's ready to make api request
  const [value, setValue] = useState('');

  // throttle - send value to app component after 300 ms. listen prev value with useRef
  const throttled = useRef(_.throttle((newValue) => {
    props.handleChangeInput(newValue);
  }, 3000))


  useEffect(() => {
    throttled.current(value);
  }, [value]);

  //send changes only if length >2
  const handleChange = (value) => {
    if (value.length > 2) {
      setValue(value);
    };
  }

  return (
    <form
      onSubmit={event => event.preventDefault()}
      className={classes.form}>
      <input
        className={classes.input}
        type="text"
        name="name"
        onChange={(e) => handleChange(e.target.value)}
        required >
      </input>
    </form>
  );
};

export default Form;
