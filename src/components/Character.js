import React from "react";
import { Link } from "react-router-dom";

const Character = (props) => {
  return (
    <Link to={`/user/${props.element.id}`}>
      <article className="card">
        <img
          className="card__img"
          src={props.element.image}
          alt={`Foto de ${props.element.name}`}
          title={`Foto de ${props.element.name}`}
        />
        <h4 className="card__title">{props.element.name}</h4>
        <p className="species">{props.element.species}</p>
      </article>
    </Link>
  );
};

export default Character;
