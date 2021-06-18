import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";
import FilterByStatus from "./FilterByStatus";
import PropTypes from "prop-types";

function Filters(props) {
  const handleForm = (ev) => {
    ev.preventDefault();
  };
  return (
    <section className="form-section">
      <form className="form" action="" onSubmit={handleForm}>
        <FilterByName
          filterName={props.filterName}
          handleFilter={props.handleFilter}
        />
        <FilterBySpecies
          filterSpecies={props.filterSpecies}
          handleFilter={props.handleFilter}
        />
        <FilterByStatus
          filterStatus={props.filterStatus}
          handleFilter={props.handleFilter}
        />
      </form>
    </section>
  );
}
export default Filters;

Filters.propTypes = {
  filterName: PropTypes.array,
  handleFilter: PropTypes.func,
  filterSpecies: PropTypes.array,
};
