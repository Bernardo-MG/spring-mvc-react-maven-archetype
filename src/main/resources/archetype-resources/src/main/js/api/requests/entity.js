import { crudRequests } from 'api/operations';

import { normalize } from 'normalizr';
import { entity as EntitySchema } from 'entities/schema';

const EntityPath = '/rest/Entity/';

function normalizeEntity(response) {
   const normalized = normalize(response, [EntitySchema]);
   let result;

   if (normalized.entities.Entities) {
      result = normalized.entities;
   } else {
      result = { Entities: [] };
   }

   return result;
}

const transformContent = (func) => (response) => {
   const content = func(response.content);
   return { ...response, content };
};

const Entities = {
   create: (data) => crudRequests.create(EntityPath, data),
   byTitle: (query, page, perPage) => crudRequests.read(`/rest/entity?query=${query}&&page=${page}&&size=${perPage}`).then(transformContent(normalizeEntity))
};

export {
   Entities
};
