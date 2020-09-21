import { crudRequests, fileRequests } from 'api/operations';

import { normalize } from 'normalizr';
import { entity as EntitySchema } from 'entities/schema';

const EntityPath = '/rest/entity/';

function normalizeEntity(response) {
   const normalized = normalize(response, [EntitySchema]);
   let result;

   if (normalized.entities) {
      result = { content: normalized.entities.entities, ids: normalized.result };
   } else {
      result = { content: {}, ids: [] };
   }

   return result;
}

const transformContent = (func) => (response) => {
   const content = func(response.content.content);
   return { ...response.content, ...content };
};

const Entities = {
   create: (data) => crudRequests.create(EntityPath, data),
   byTitle: (query, page, perPage) => crudRequests.read(`${EntityPath}?query=${query}&&page=${page}&&size=${perPage}`).then(transformContent(normalizeEntity)),
   report: () => fileRequests.download(`${EntityPath}pdf`, 'entities.pdf')
};

export {
   Entities
};
