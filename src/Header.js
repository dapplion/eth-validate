import React from "react";

export default function Header({ activeProviders }) {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <h5 className="my-0 mr-md-auto font-weight-normal">Eth Validate</h5>
      <nav className="my-2 my-md-0 mr-md-3">
        <span className="p-2 text-dark">
          Active providers:{" "}
          {activeProviders.length ? activeProviders.join(", ") : "none"}
        </span>
        <a className="p-2 text-dark" href="/">
          Docs
        </a>
      </nav>
    </div>
  );
}
