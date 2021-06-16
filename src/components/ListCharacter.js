import CharacterCard from "./CharacterCard";
import NotFound from "./NotFound";

function ListCharacter(props) {
  if (props.character.length === 0) {
    return <NotFound filterName={props.filterName} />;
  }
  const characterElement = props.character.map((element) => {
    return (
      <li key={element.id}>
        <CharacterCard element={element} />
      </li>
    );
  });
  return (
    <>
      <ul>{characterElement}</ul>
    </>
  );
}

export default ListCharacter;
