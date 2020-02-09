import React, { useState, useEffect } from 'react';
import useRickMortySearch from "../../hooks/useRickMortySearch.js";
import useRickMortyPageCounter from "../../hooks/useRickMortyPageCounter.js";
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import _ from 'lodash';

import Card from "../card/card";
// import Pagination from "./pagination/pagination";
import PageLink from "./pagination/PageLink";
import classes from './results.pcss'



function Results(props) {


  let result = <p>Search results will be shown here.</p>
  let pagePaginationElement = [];
  //if request name shorteeer then 2 break api request
  if (props.requestName.length <= 2) {
    return result;
  }

  const [deletedPersonsID, setDeletedPersonsID] = useState([]);
  const onCloseHandler = (id) => {
    console.log('close!');

    if (!deletedPersonsID.includes(id)) setDeletedPersonsID([...deletedPersonsID, id])
  }

  const [page, setPage] = useState(1);
  // //api request
  const {pageLoading, pageError, pageData} = useRickMortyPageCounter(props.requestName);
  if (pageLoading) {
    result = <p>Loading...</p>;
  } else if (pageError) {
    result = <p>Error! {error.message}</p>;
  } else {
    const pages = pageData.characters.info.pages;
    for (let i = 1; i <= pages; i++) {
      pagePaginationElement.push(<PageLink key={i} page={i} requestName={props.requestName} onSelectPage={setPage}/>)
    }
  }


  const { loading, error, data } = useRickMortySearch(props.requestName, page);
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
      {pagePaginationElement}
    </div>
  )

}

export default Results;
