const baseURL = "https://rickandmortyapi.com/api/character";

export const getAllCharacters = async (page: number) => {
  const response = await fetch(`${baseURL}?page=${page}`, {
    method: "GET",
  });
  return await response.json();
};

export const getCharactersDetails = async (id: string = "1") => {
  const response = await fetch(`${baseURL}/${id}`, {
    method: "GET",
  });
  return await response.json();
};
