import CharacterCard from "./CharacterCard";
import NotFound from "./NotFound";
import PropTypes from "prop-types";

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
    
        <ul
          className='characters__list'
        >
          {characterElement}
        </ul>
  
    </>
  );
}

export default CharacterList;

CharacterList.propsTypes = {
  character: PropTypes.array,
};
