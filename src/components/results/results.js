import React, { useState, useEffect } from 'react';
import useRickMortySearch from "../../hooks/useRickMortySearch.js";
import useRickMortyPageCounter from "../../hooks/useRickMortyPageCounter.js";
import _ from 'lodash';

import Card from "../card/card";
import Pagination from "./pagination/pagination";
import classes from './results.pcss'



function Results(props) {

  let result = <p>Search results will be shown here.</p>
  let pagePaginationElement = null;
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
  //console.log(pageLoading, pageError, pageData);

  if (pageLoading) {
    result = <p>Loading...</p>;
  } else if (pageError) {
    result = <p>Error! please reload page.</p>;
  } else if (pageData.characters.info.pages > 1) {
     const pages = pageData.characters.info.pages;
     pagePaginationElement = (< Pagination
        pages={pages}
        currentPage={page}
        requestName={props.requestName}
        onSelectPage={setPage}/>);
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
