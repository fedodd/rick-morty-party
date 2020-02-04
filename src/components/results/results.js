import React from 'react';
import useRickMortySearch from "../../hooks/useRickMortySearch.js";

function results(props) {

  const {loading, error, data} = useRickMortySearch('mort');
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

export default results;
