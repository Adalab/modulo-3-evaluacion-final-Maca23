import React from "react";

const FilterByStatus = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "status",
    });
  };
  return (
    <>
      <label htmlFor="status">Estatus:</label>

      <select
        name="status"
        id="status"
        value={props.filterStatus}
        onChange={handleChange}
      >
        <option className="option" value="">
          All
        </option>
        <option className="option" value="Alive">
          Alive
        </option>
        <option className="option" value="Dead">
          Dead
        </option>
        <option className="option" value="unknown">
          unknown
        </option>
      </select>
    </>
  );
};

export default FilterByStatus;
