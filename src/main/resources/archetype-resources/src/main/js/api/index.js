import superagent from 'superagent';

const API_ROOT = 'http://localhost';

const requests = {
   get: (url) => superagent.get(`${API_ROOT}${url}`).then((response) => JSON.parse(response.text))
};

const Entities = {
   byTitle: () => requests.get('/rest/entity')
};

export default {
   Entities
};
