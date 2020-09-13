import { requestFailureSagas } from 'api/sagas/failure';

import { Palettes, Schemes } from 'api/requests';

import { crud } from 'api/sagas/crud';
import { report } from 'api/sagas/report';

export const apiSagas = [
   ...requestFailureSagas,
   ...crud('PALETTE', Palettes),
   ...crud('SCHEME', Schemes),
   ...report('PALETTE', Palettes)
];
