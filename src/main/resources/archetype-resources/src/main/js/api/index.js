import superagent from 'superagent';

const API_ROOT = 'http://localhost:8080';

const requests = {
   get: (url) => superagent.get(`${API_ROOT}${url}`).then((response) => JSON.parse(response.text)),
   post: (url, body) => superagent.post(`${API_ROOT}${url}`, body).then((response) => JSON.parse(response.text))
};

const Entities = {
   create: (name) => requests.post('/rest/entity', { name }),
   byTitle: (query, page, perPage) => requests.get(`/rest/entity?query=${query}&&page=${page}&&size=${perPage}`)
};

export default {
   Entities
};
