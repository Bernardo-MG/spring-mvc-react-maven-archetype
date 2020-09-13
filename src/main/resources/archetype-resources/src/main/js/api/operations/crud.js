import superagent from 'superagent';

export const crudRequests = {
   create: (url, body) => superagent.post(`${API_ROOT}${url}`, body).set('Content-Type', 'application/json').ok((res) => res.status < 500).then((response) => JSON.parse(response.text)),
   delete: (url, id) => superagent.delete(`${API_ROOT}${url}${id}`).set('Content-Type', 'application/json').ok((res) => res.status < 500).then((response) => JSON.parse(response.text)),
   read: (url) => superagent.get(`${API_ROOT}${url}`).set('Content-Type', 'application/json').then((response) => JSON.parse(response.text)),
   update: (url, id, body) => superagent.put(`${API_ROOT}${url}${id}`, body).set('Content-Type', 'application/json').ok((res) => res.status < 500).then((response) => JSON.parse(response.text))
};
