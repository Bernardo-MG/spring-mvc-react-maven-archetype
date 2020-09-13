import { requestFailureSagas } from 'api/sagas/failure';

import { Entities } from 'api/requests';

import { crud } from 'api/sagas/crud';
import { report } from 'api/sagas/report';

export const apiSagas = [
   ...requestFailureSagas,
   ...crud('ENTITY', Entities),
   ...report('ENTITY', Entities)
];
