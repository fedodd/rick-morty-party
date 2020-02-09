import React from 'react';
import useRickMortySearch from "../../../hooks/useRickMortySearch";

function pageLink(props) {
  //const page = props.page
  console.log('pagelink ', props);

  return (
    <a onClick={() => props.onSelectPage(props.page)}>
      {props.page}
    </a>
  );
}

export default pageLink;
