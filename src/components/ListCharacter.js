import Character from "./Character";

function ListCharacter(props) {
  const characterElement = props.character.map((element) => {
    return (
      <li key={element.id}>
        <Character element={element} />
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
