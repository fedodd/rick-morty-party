import React from 'react';
import useRickMortySearch from "../../hooks/useRickMortySearch.js";
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import _ from 'lodash';

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

  let result = <p>Search results will be shown here.</p>;

  const APIrequest = (targetName) => {

    if (targetName.length <= 2) {
      return result;
    }

    const { loading, error, data } = useQuery(RICK_MORTY_SEARCH, {
      variables: { targetName },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;

    if (!data.characters.info.count) return <p>No results</p>;

    return data.characters.results.map(elem =>
      (<div key={elem.id}>
        <h3>{elem.name}</h3>
        <img src={elem.image}></img>
      </div>)
    );
  }

  result = APIrequest(props.requestName);

  return (
    <div>
      {result}
    </div>
  )

}

export default Results;
