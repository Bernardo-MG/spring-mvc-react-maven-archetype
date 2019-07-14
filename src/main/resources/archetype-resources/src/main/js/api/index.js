import superagent from 'superagent';

const API_ROOT = 'https://openlibrary.org';

const requests = {
   get: (url) => superagent.get(`${API_ROOT}${url}`).then((response) => JSON.parse(response.text))
};

const Entities = {
   all: () => requests.get('/rest/entity')
};

export default {
   Entities
};
