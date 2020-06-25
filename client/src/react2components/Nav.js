import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="navBar">
      <ul>
        <Link to={"/"}> Home </Link>
      </ul>
    </div>
  );
}
