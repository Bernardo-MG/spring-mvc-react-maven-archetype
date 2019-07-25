import superagent from 'superagent';

const API_ROOT = 'http://localhost:8080';

const requests = {
   get: (url) => superagent.get(`${API_ROOT}${url}`).then((response) => JSON.parse(response.text)),
   put: (url, body) => superagent.put(`${API_ROOT}${url}`, body).then((response) => JSON.parse(response.text))
};

const Entities = {
   create: (name) => requests.put('/rest/entity', { name }),
   byTitle: (query) => requests.get(`/rest/entity?query=${query}`)
};

export default {
   Entities
};
