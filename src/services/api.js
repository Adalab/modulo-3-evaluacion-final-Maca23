const getApiData = () => {
  return fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
      const cleanData = data.results.map((user) => {
        return {
          id: user.id,
          name: user.name,
          image: user.image,
          species: user.species,
          status: user.status,
          origin: user.origin.name,
          episodes: user.episodes.length,
        };
      });
      return cleanData;
    });
};

export default getApiData;