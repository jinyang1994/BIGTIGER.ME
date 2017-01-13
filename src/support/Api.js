import FetchHttpClient, { json, query, header } from 'fetch-http-client';
import config from '../config';

const client = new FetchHttpClient(config.mapi.bigtiger);

client.addMiddleware(json());
client.addMiddleware(query());

export default client;