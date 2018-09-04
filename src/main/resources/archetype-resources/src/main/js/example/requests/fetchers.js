import { normalize } from 'normalizr';
import { Fetcher } from 'api/fetch';
import { player } from 'example/schema';
import { ENTITIES_REST_ENDPOINT } from 'example/requests/endpoints';

export const fetcherPlayer = new Fetcher(ENTITIES_REST_ENDPOINT, (json) => normalize(json, [player]));
