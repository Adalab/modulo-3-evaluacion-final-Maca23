import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";
import PropTypes from "prop-types";

function FilterCharacter(props) {
  const handleForm = (ev) => {
    ev.preventDefault();
  };
  return (
    <section>
      <form onSubmit={handleForm}>
        <FilterByName
          filterName={props.filterName}
          handleFilter={props.handleFilter}
        />
        <FilterBySpecies
          filterSpecies={props.filterSpecies}
          handleFilter={props.handleFilter}
        />
      </form>
    </section>
  );
}
export default FilterCharacter;

FilterCharacter.propTypes = {
  filterName: PropTypes.array,
  handleFilter: PropTypes.func,
  filterSpecies: PropTypes.array,
};
