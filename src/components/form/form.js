import React, { useState, useEffect } from 'react';
import classes from "./form.pcss";


const form = () => {

  const [value, setValue] = useState('');
  useEffect(() => {
    // Обновляем заголовок документа с помощью API браузера
    //document.title = `Вы - ${value}`;
  }, [value]);


  function handleOnChange(value) {
    setValue(value);
  }

  return (
    <div
      className={classes.form}
      onClick={() => handleOnChange('rick')}>
      i am form with value: {value}
    </div>
  );
};

export default form;
