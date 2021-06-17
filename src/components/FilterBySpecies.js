import React from "react";

const FilterBySpecies = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "species",
    });
  };
  return (
    <>
      <label htmlFor="species">Especie:</label>

      <select
        name="species"
        id="species"
        value={props.filterSpecies}
        onChange={handleChange}
      >
        <option className="option" value="">
          Todos
        </option>
        <option className="option" value="Human">
          Humano
        </option>
        <option className="option" value="Alien">
          Alien
        </option>
      </select>
    </>
  );
};

export default FilterBySpecies;
