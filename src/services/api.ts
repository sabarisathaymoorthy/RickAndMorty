
const baseURL = "https://rickandmortyapi.com/api/character"

export const getAllCharacters = async () => {
    const response = await fetch(`${baseURL}?page=${1}`, {
        method: 'GET'
    })
    return await response.json()
}

export const getCharactersDetails = async (id: number = 1) => {
    return await fetch(`${baseURL}?id=${id}`, {
        method: 'GET'
    })
}

