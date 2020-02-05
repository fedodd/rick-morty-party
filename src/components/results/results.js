import React from 'react';
import useRickMortySearch from "../../hooks/useRickMortySearch.js";
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

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

  console.log('results name', props.requestName);
  const targetName = props.requestName;
  const { loading, error, data } = useQuery(RICK_MORTY_SEARCH, {
    variables: { targetName },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  if (!data.characters.info.count) return <p>No results</p>;

  let resultList = data.characters.results.map(elem =>
    (<div key={elem.id}>
      <h3>{elem.name}</h3>
      <img src={elem.image}></img>
    </div>)
  );

  return (
    <div>
      {resultList}
    </div>
  )

}

export default Results;
