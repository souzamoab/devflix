import config from '../config';

const VIDEOS_URL = `${config.URL}/videos`;

function create(video) {
  return fetch(`${VIDEOS_URL}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(video),
  })
    .then(async (serverResponse) => {
      if (serverResponse.ok) {
        const response = await serverResponse.json();
        return response;
      }

      throw new Error('Não foi possível captar os dados.');
    });
}

export default {
  create,
};
