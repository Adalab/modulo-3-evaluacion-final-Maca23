import CharacterCard from "./CharacterCard";
import NotFound from "./NotFound";
import PropTypes from "prop-types";
import '../stylesheets/components/_character-list.scss';

function CharacterList(props) {
  if (props.character.length === 0) {
    return <NotFound filterName={props.filterName} />;
  }
  const characterElement = props.character.map((element) => {
    return (
      <li key={element.id} className="character__item">
        <CharacterCard element={element} />
      </li>
    );
  });
  return (
    <>
      <section className="characters">
        <ul
          className={`characters__list characters__list--${props.characters.length}`}
        >
          {characterElement}
        </ul>
      </section>
    </>
  );
}

export default CharacterList;

CharacterList.propsTypes = {
  character: PropTypes.array,
};
