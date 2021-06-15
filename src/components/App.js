import "../stylesheets/App.css";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import api from "../services/api";
import ListCharacter from "./ListCharacter";
import FilterCharacter from "./FilterCharacter";
import ls from "../services/local-storage";

function App() {
  const [character, setCharacter] = useState(ls.get("character", []));
  const [filterName, setFilterName] = useState(ls.get("filterName", ""));
  const [filterSpecies, setFilterSpecies] = useState(
    ls.get("filterSpecies", "")
  );
  
  //Importación de la api
  useEffect(() => {
    if (character.length === 0) {
      api().then((usersData) => {
        setCharacter(usersData);
      });
    }
  }, []);

  useEffect(() => {
    ls.set("character", character);
  }, [character]);

  useEffect(() => {
    ls.set("character", character);
    ls.set("filterName", filterName);
    ls.set("filterSpecies", filterSpecies);
  }, [character, filterName, filterSpecies]);

  const renderCharacterDetail = (props) => {
    const routeUserId = props.match.params.id;
    const foundUser = character.find((user) => {
      return user.id === routeUserId;
    });
    if (foundUser !== undefined) {
      return <characterDetail user={foundUser} />;
    } else {
      return <p>Personaje no encontrado</p>;
    }
  };

  const handleFilter = (data) => {
    if (data.key === "name") {
      setFilterName(data.value);
    } else if (data.key === "species") {
      setFilterSpecies(data.value);
    }
  };

  const filteredCharacter = character
    .filter((user) => {
      return user.name.toLowerCase().includes(filterName.toLowerCase());
    })
    .filter((user) => {
      if (filterSpecies === "") {
        return true;
      } else {
        return user.species === filterSpecies;
      }
    });

  return (
    <>
      <Switch>
        <Route exact path="/">
          <FilterCharacter
            filterName={filterName}
            filterSpecies={filterSpecies}
            handleFilter={handleFilter}
          />
          <ListCharacter character={filteredCharacter} />
        </Route>
        <Route path="/character/:id" render={renderCharacterDetail} />
      </Switch>
    </>
  );
}

export default App;
