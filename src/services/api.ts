const baseURL = "https://rickandmortyapi.com/api/character";

export const getAllCharacters = async (page: number) => {
  const response = await fetch(`${baseURL}?page=${page}`, {
    method: "GET",
  });
  return await response.json();
};

export const getCharactersDetails = async (id: number = 1) => {
  return await fetch(`${baseURL}?id=${id}`, {
    method: "GET",
  });
};
