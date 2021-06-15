import FilterByName from './FilterByName';
import FilterBySpecies from './FilterBySpecies';

function FilterCharacter(props) {
  return (
    <section>
      <form>
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

