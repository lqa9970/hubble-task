import React, { useState, useEffect } from "react";
import API from "../api/issues";
import { useParams } from "react-router-dom";
import Details from "./Details";

const IssuesDetails = () => {
  const [issueDetail, setIssueDetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const results = await API.get(`/issues/${id}`);
      setIssueDetail(results.data);
    };

    fetchData();
  }, []);

  const renderDetail = () => {
    return <Details issueDetail={issueDetail} />;
  };
  return <div>{renderDetail()}</div>;
};

export default IssuesDetails;
