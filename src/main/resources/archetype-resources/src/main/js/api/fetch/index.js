import request from 'superagent';

const paginatedContent = (content) => {
   const pagination = {
      first: content.first,
      last: content.last,
      numberOfElements: content.numberOfElements,
      totalElements: content.totalElements,
      page: content.number,
      totalPages: content.totalPages,
      pageSize: content.size,
      sort: content.sort
   };

   const result = {
      payload: content.content,
      pagination
   };

   return result;
};

const handleResponse = (status, response, parse) => {
   if (!status) {
      return Promise.reject(response);
   }

   let content;
   if (response) {
      if (response.number === null || response.number === undefined) {
         // Pagination info is missing
         // The payload is the response itself
         content = { payload: response };
      } else {
         content = paginatedContent(response);
      }

      // The payload is parsed
      content.payload = parse(content.payload);

      if ((content.payload === undefined) || (content.payload === null)) {
         console.warn('Missing response payload');
      }
   } else {
      console.warn('Missing response');
   }

   return content;
};

const fetchJsonPaginated = (url, params, parse) =>
   request.get(url).query(params).set('Accept', 'application/json').then((response) =>
      handleResponse(response.ok, response.body, parse)
   );

export const Fetcher = class {

   constructor(url, processor) {
      this.url = url;

      if (processor) {
         this.processor = processor;
      } else {
         // By default the response is not parsed
         this.processor = (response) => response;
      }
   }

   _onError(error) {
      const message = error.message || 'Request failed';
      throw message;
   }

   fetch(params) {
      return fetchJsonPaginated(this.url, params, this.processor).then(
         (response) => response,
         (error) => this._onError(error)
      );
   }

};
