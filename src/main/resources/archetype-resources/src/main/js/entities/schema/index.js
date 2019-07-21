import { schema } from 'normalizr';

/**
 * Entity schema.
 */
export const entity = new schema.Entity('entities', {
}, {
   idAttribute: 'id'
});
