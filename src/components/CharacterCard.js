import React from "react";
import { Link } from "react-router-dom";
import getIconStatus from "../services/getIconStatus";
import getIconSpecies from "../services/getIconSpecies";
import PropTypes from "prop-types";

const CharacterCard = (props) => {
  return (
    <Link to={`/character/${props.element.id}`}>
      <div className="character__item">
        <img
          className="character__item--image"
          src={props.element.image}
          alt={`Foto de ${props.element.name}`}
          title={`Foto de ${props.element.name}`}
        />
        <h4 className="character__item--title">{props.element.name}</h4>
        <p className="character__item--species">{props.element.species}</p>
        <p className="character__item--status">{props.element.status}</p>
        <div className="character__item--icons">
          <span>{getIconStatus(props.element.status)}</span>
          <span>{getIconSpecies(props.element.species)}</span>
        </div>
      </div>
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
