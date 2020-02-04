import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';


const RICK_MORTY_SEARCH = gql`
  query {
    characters(filter: { name: "rick" }) {
      info {
        count
      }
      results {
        id,
        name,
        image
      }
    }
  }
  `;

const form = () => {
  const { loading, error, data } = useQuery(RICK_MORTY_SEARCH);

  const [value, setValue] = useState('');
  let result = null;
  useEffect(() => {
    // Обновляем заголовок документа с помощью API браузера
    document.title = `Вы - ${value}`;

    if (loading) result = <p>Loading...</p>;
    else if (error) result = <p>Error :(</p>;
    else result = data;
  }, [value]);


  function handleOnChange(value) {
    setValue(value);
  }
  console.log(result);

  return (
    <div onClick={() => handleOnChange('rick')}>
      i am form with value: {value}
      {result}
    </div>
  );
};

export default form;
