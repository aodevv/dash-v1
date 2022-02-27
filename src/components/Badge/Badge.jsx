import React from "react";

import "./Badge.scss";

const Badge = ({ type, content }) => {
  return <span className={`badge badge-${type}`}>{content}</span>;
};

export default Badge;
