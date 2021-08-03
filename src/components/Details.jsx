import React from "react";

const Details = ({ issueDetail }) => {
  return (
    <div className="issue-popup">
      <ul>
        Issue name: <b>{issueDetail?.title}</b>
      </ul>
      <ul>Issue number: {issueDetail?.number}</ul>
      <ul>Id: {issueDetail?.id}</ul>
      <ul>
        <i>state: {issueDetail?.state}</i>
      </ul>
      <ul>Description: {issueDetail?.body}</ul>
      <ul>
        <a href={issueDetail?.html_url}>Link to issue</a>
      </ul>
    </div>
  );
};

export default Details;
