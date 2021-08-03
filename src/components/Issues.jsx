import React, { useEffect, useState } from "react";
import API from "../api/issues";
import IssueCard from "../components/IssueCard";

const Issues = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await API.get("/issues");
      setIssues(response.data);
      console.log(response.data);
    };

    fetchData();
  }, []);

  const renderIssues = () => {
    return (
      <ul>
        {issues.map((issue) => {
          return <IssueCard key={issue.number} issue={issue} />;
        })}
      </ul>
    );
  };

  return <div>{renderIssues()}</div>;
};

export default Issues;
