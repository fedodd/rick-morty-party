import React, { useState, useEffect } from 'react';
import useRickMortySearch from "../../hooks/useRickMortySearch.js";
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import _ from 'lodash';

import Card from "../card/card";
import classes from './results.pcss'

const RICK_MORTY_SEARCH = gql`
  query Name($targetName: String) {
    characters(filter: { name: $targetName}) {
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

function Results(props) {

  let result = <p>Search results will be shown here.</p>
  //if request name shorteeer then 2 break api request
  if (props.requestName.length <= 2) {
    return result;
  }

  const [deletedPersonsID, setDeletedPersonsID] = useState([]);
  const onCloseHandler = (id) => {
    console.log('close!');

    if (!deletedPersonsID.includes(id)) setDeletedPersonsID([...deletedPersonsID, id])
  }

  //api request
  const { loading, error, data } = useRickMortySearch(props.requestName);
  if (loading) {
    result = <p>Loading...</p>;
  } else if (error) {
    result = <p>Error! {error.message}</p>;
  } else if (data.characters.results === null) {
    result = <p>No results</p>;
  } else {
    result = data.characters.results.reduce((acc, elem) => {
      if (!deletedPersonsID.includes(elem.id)) {
        const card = <Card
        key={elem.id}
        onClose={onCloseHandler}
        onPick={props.onPickPerson}
        data={elem} />;

        return [...acc, card]
      }
      return acc;
    }, []);

  }


  return (
    <div className={classes.results}>
      {result}
    </div>
  )

}

export default Results;
