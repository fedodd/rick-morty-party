import React, { useState } from 'react';
import useRickMortySearch from "../../hooks/useRickMortySearch.js";
import useRickMortyPageCounter from "../../hooks/useRickMortyPageCounter.js";
import _ from 'lodash';

import Card from "../card/card";
import Pagination from "../pagination/pagination";
import classes from './results.pcss'



function Results(props) {

  let result = <p>Search results will be shown here.</p>


  //if request name shorteeer then 2 break api request
  if (props.requestName.length <= 2) {
    return result;
  }

  //deleted persons id array
  const [deletedPersonsID, setDeletedPersonsID] = useState([]);
  const onCloseHandler = (id) => {
    console.log('close!');
    if (!deletedPersonsID.includes(id)) setDeletedPersonsID([...deletedPersonsID, id])
  }

  //pagination
  const [page, setPage] = useState(1);
  let pagePagination = null;


  // count pages of person cards
  const {pageLoading, pageError, pageData} = useRickMortyPageCounter(props.requestName);

  if (pageLoading) {
    result = <p>Loading...</p>;
  } else if (pageError) {
    result = <p>Error! please reload page.</p>;
  } else if (pageData.characters.info.pages > 1) {
    //add pagination only if it's more then 1 page
     const pages = pageData.characters.info.pages;
     pagePagination = (< Pagination
        pages={pages}
        currentPage={page}
        requestName={props.requestName}
        onSelectPage={setPage}/>);
  }

  //get persons data
  const { loading, error, data } = useRickMortySearch(props.requestName, page);
  if (loading) {
    result = <p>Loading...</p>;
  } else if (error) {
    result = <p>Error! {error.message}</p>;
  } else if (data.characters.results === null) {
    result = <p>No results</p>;
  } else {
    result = data.characters.results.reduce((acc, elem) => {
      //filter deleted persons
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
      {pagePagination}
    </div>
  )

}

export default Results;
