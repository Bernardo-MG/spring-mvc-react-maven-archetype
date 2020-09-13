import { crudRequests } from 'api/operations';

import { normalize } from 'normalizr';
import { Entity as Entitieschema } from 'domain/schema';

const EntityPath = '/rest/Entity/';

function normalizeEntity(response) {
   const normalized = normalize(response, [Entitieschema]);
   let result;

   if (normalized.entities.Entities) {
      result = normalized.entities;
   } else {
      result = { Entities: [], palettes: [], paints: [] };
   }

   return result;
}

const transformContent = (func) => (response) => {
   const content = func(response.content);
   return { ...response, content };
};

const Entities = {
   create: (data) => crudRequests.create(EntityPath, data),
   delete: (id) => crudRequests.delete(EntityPath, id),
   update: (data) => crudRequests.update(EntityPath, data.id, data),
   read: () => crudRequests.read(EntityPath).then(transformContent(normalizeEntity))
};

export {
   Entities
};
