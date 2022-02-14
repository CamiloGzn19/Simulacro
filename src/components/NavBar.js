import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="Nav">
      <ul>
        <Link className="link" to="/Home">Home</Link>
        <Link className="link" to="/Registro">Registro</Link>
      </ul>
    </div>
  );
};
