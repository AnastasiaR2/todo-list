import { Http } from './http/http.service.js';
import { Todos } from './todos/todos.service.js';

const API_URL = 'https://dummyjson.com';

const http = new Http();
const todos = new Todos({
  baseUrl: API_URL,
  http,
});

export { http, todos };
