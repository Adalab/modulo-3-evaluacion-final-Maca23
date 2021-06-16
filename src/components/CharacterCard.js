import React from "react";
import { Link } from "react-router-dom";
import getIconStatus from "../services/getIconStatus";
import getIconSpecies from "../services/getIconSpecies";
import PropTypes from "prop-types";

const CharacterCard = (props) => {
  return (
    <Link to={`/character/${props.element.id}`}>
      <article className="card">
        <img
          className="card__img"
          src={props.element.image}
          alt={`Foto de ${props.element.name}`}
          title={`Foto de ${props.element.name}`}
        />
        <h4 className="card__title">{props.element.name}</h4>
        <p className="species">{props.element.species}</p>
        <div className="character__item--icons">
          <span>{getIconStatus(props.element.status)}</span>
          <span>{getIconSpecies(props.element.species)}</span>
        </div>
      </article>
    </Link>
  );
};

export default CharacterCard;

CharacterCard.propTypes = {
  element: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    species: PropTypes.string,
    photo: PropTypes.string,
    status: PropTypes.string,
  }),
};
