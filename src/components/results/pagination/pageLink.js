import React from 'react';
import classes from "./pageLink.pcss";
function pageLink(props) {

  return (
    <a
      className={props.isActive ? classes.pageLink + ' ' + classes.is__active : classes.pageLink}
      onClick={() => props.onSelectPage(props.page)}>
      {props.page}
    </a>
  );
}

export default pageLink;
