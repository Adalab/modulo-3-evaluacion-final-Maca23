const iconHuman = <i className="fas fa-user"></i>;
const iconAlien = <i class="fas fa-hand-spock"></i>;

const getIconSpecies = (species) => {
  return species.toLowerCase() === "human" ? iconHuman : iconAlien;
};

export default getIconSpecies;
