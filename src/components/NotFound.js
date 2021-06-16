import PropTypes from "prop-types";

function NotFound(props) {
  return (
    <p>No hay ningún personaje que coincida con el nombre {props.filterName}</p>
  );
}

export default NotFound;

NotFound.propTypes = {
  filterName: PropTypes.array,
}