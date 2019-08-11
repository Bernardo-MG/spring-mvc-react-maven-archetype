import superagent, { parse } from 'superagent';

const API_ROOT = 'http://localhost:8080';

function saveFile(blob, type, filename) {
   // It is necessary to create a new blob object with mime-type explicitly set
   // otherwise only Chrome works like it should
   const newBlob = new Blob([blob], { type });

   if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      // IE doesn't allow using a blob object directly as link href
      // instead it is necessary to use msSaveOrOpenBlob
      window.navigator.msSaveOrOpenBlob(newBlob);
   } else {
      // For other browsers: 
      // Create a link pointing to the ObjectURL containing the blob.
      const data = window.URL.createObjectURL(newBlob);

      const link = document.createElement('a');
      link.href = data;
      link.download = filename;
      link.click();

      // For Firefox it is necessary to delay revoking the ObjectURL
      setTimeout(() => { window.URL.revokeObjectURL(data); }, 100);
   }
}

const requests = {
   download: (url, filename) => superagent.get(`${API_ROOT}${url}`).responseType('blob').parse(parse.image)
      .then(
         (response) => {
            saveFile(response.body, response.type, filename);
         },
         (error) => error.message || 'Request failed'
      ),
   get: (url) => superagent.get(`${API_ROOT}${url}`).then((response) => JSON.parse(response.text)),
   post: (url, body) => superagent.post(`${API_ROOT}${url}`, body).then((response) => JSON.parse(response.text))
};

const Entities = {
   create: (name) => requests.post('/rest/entity', { name }),
   byTitle: (query, page, perPage) => requests.get(`/rest/entity?query=${query}&&page=${page}&&size=${perPage}`)
};

const Report = {
   download: () => requests.download('/rest/entity/pdf', 'report.pdf')
};

export default {
   Entities,
   Report
};
