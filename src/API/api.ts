export const getCharactersApi = async (name: string) => {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${name}`
    );
    if (!response.ok) throw new Error(`Запрос не удался`);
    const data = await response.json();
    return data.results;
  } catch (err) {
    return err;
  }
};
