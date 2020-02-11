import React from 'react';
import PageLink from "./pageLink";
import classes from "./pagination.pcss";

function pagination(props) {

  let pagesArray = [];
  for (let i = 1; i <= props.pages; i++) {
      pagesArray.push(
        <PageLink
          key={i}
          page={i}
          isActive={props.currentPage===i}
          requestName={props.requestName}
          onSelectPage={props.onSelectPage}/>)
    }

  return (
    <div className={classes.pagination}>
      {pagesArray}
    </div>
  );
}

export default pagination;
