import config from '../config';

const CATEGORIAS_URL = `${config.URL}/categorias`;

function getAll() {
  return fetch(`${CATEGORIAS_URL}`)
    .then(async (serverResponse) => {
      if (serverResponse.ok) {
        const resposta = await serverResponse.json();
        return resposta;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

function getAllWithVideos() {
  return fetch(`${CATEGORIAS_URL}?_embed=videos`).then(async (serverResponse) => {
    if (serverResponse.ok) {
      const response = await serverResponse.json();

      return response;
    }

    throw new Error('Não foi possível captar os dados.');
  });
}

export default {
  getAllWithVideos,
  getAll,
};
