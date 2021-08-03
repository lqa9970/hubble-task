import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api/issues";

const IssueCard = ({ issue }) => {
  return (
    <Link to={`/issues/${issue.number}`}>
      <div className="column">
        <div className="card">
          <div className="circle"></div>
          <div className="container list-group-item list-group-item-action justify-content-between">
            <h4>
              <b>Issue: {issue.number}</b>
            </h4>
            <i>state: {issue.state}</i>
            <br />
            <p>{issue.body}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default IssueCard;
