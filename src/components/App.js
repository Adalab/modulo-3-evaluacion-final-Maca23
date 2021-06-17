import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import api from "../services/api";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
import ls from "../services/local-storage";
import RickAndMorty from "../images/RickAndMorty.png";
import '../stylesheets/App.css';

function App() {
  const [character, setCharacter] = useState(ls.get("character", []));
  const [filterName, setFilterName] = useState(ls.get("filterName", ""));
  const [filterSpecies, setFilterSpecies] = useState(
    ls.get("filterSpecies", "")
  );

  useEffect(() => {
    api().then((data) => {
      const orderedData = data.sort((a, b) =>
        a.name > b.name ? 1 : a.name < b.name ? -1 : 0
      );
      return setCharacter(orderedData);
    });
  }, []);

  useEffect(() => {
    ls.set("character", character);
  }, [character]);

  useEffect(() => {
    ls.set("character", character);
    ls.set("filterName", filterName);
    ls.set("filterSpecies", filterSpecies);
  }, [character, filterName, filterSpecies]);

  const renderCharacterDetail = (propsId) => {
    const routeUserId = propsId.match.params.id;
    const foundUser = character.find(
      (user) => user.id === parseInt(routeUserId)
    );
    if (foundUser) {
      return <CharacterDetail user={foundUser} />;
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
      <header className="page__header">
        <img
          className="page__header--image"
          src={RickAndMorty}
          alt="logo"
          title="logo"
        />
      </header>
      <main className="main">
        <Switch>
          <Route exact path="/">
            <Filters
              filterName={filterName}
              filterSpecies={filterSpecies}
              handleFilter={handleFilter}
            />
            <CharacterList
              character={filteredCharacter}
              filterName={filterName}
            />
          </Route>
          <Route path="/character/:id" render={renderCharacterDetail} />
        </Switch>
      </main>
      <footer className="page__footer">
        <small>Macarena González &copy; 2021</small>
      </footer>
    </>
  );
}

export default App;
