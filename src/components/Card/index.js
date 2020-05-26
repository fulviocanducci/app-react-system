import React from "react";

export default function Car({ title, subTitle, children }) {
  return (
    <div className="card">
      <div className="card-header">{title}</div>
      <div className="card-body">
        <h5 className="card-title">{subTitle}</h5>
        <div className="card-text">{children}</div>
      </div>
    </div>
  );
}
