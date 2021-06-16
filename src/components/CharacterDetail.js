import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CharacterDetail = (props) => {
  return (
    <div>
      <Link to="/">Volver</Link>
      <section>
        <img src={props.user.image} alt={props.user.name} />
        <h4>{props.user.name}</h4>
        <ul>
          <li>Status: {props.user.status}</li>
          <li>Species: {props.user.species}</li>
          <li>Origin: {props.user.origin}</li>
          <li>Episodes: {props.user.episode}</li>
        </ul>
      </section>
    </div>
  );
};
export default CharacterDetail;

CharacterDetail.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    status: PropTypes.string,
    origin: PropTypes.string,
    episodes: PropTypes.number,
    species: PropTypes.string,
    photo: PropTypes.string,
  }),
};
