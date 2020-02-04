import React from 'react';
import useRickMortySearch from "../../hooks/useRickMortySearch.js";

function results(props) {

  const {loading, error, data} = useRickMortySearch('Rick');
  console.log('in result ', loading, error, data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  let resultList = data.characters.results.map(elem =>
    (<div key={elem.id}>
      <h3>elem.name</h3>
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
