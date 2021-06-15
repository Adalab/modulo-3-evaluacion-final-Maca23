import React from "react";
import { Link } from "react-router-dom";

const UserDetail = (props) => {
  return (
    <div className="card">
      <Link to="/">Volver</Link>
      <section>
        <img src={props.character.image} alt={props.character.name} />
        <h2>{props.character.name}</h2>
        <ul>
          <li>Status: {props.character.status}</li>
          <li>Species: {props.character.species}</li>
          <li>Origin: {props.character.origin}</li>
          <li>Episodes: {props.character.episodes}</li>
        </ul>
      </section>
    </div>
  );
};

export default UserDetail;
