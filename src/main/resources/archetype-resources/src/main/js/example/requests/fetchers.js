import { normalize } from 'normalizr';
import { Fetcher } from 'api/fetch';
import { player } from 'players/schema';
import { ENTITIES_REST_ENDPOINT } from 'players/requests/endpoints';

export const fetcherPlayer = new Fetcher(ENTITIES_REST_ENDPOINT, (json) => normalize(json, [player]));
