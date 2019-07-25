import superagent from 'superagent';

const API_ROOT = 'http://localhost:8080';

const requests = {
   get: (url) => superagent.get(`${API_ROOT}${url}`).then((response) => JSON.parse(response.text))
};

const Entities = {
   byTitle: (query) => requests.get(`/rest/entity?query=${query}`)
};

export default {
   Entities
};
