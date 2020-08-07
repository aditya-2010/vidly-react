import React from "react";

const Like = ({ liked, onClick }) => {
  let classes = "fa fa-heart";
  if (!liked) classes += "-o";
  return (
    <div className="clickable">
      <i className={classes} aria-hidden="true" onClick={onClick}></i>
    </div>
  );
};

export default Like;
