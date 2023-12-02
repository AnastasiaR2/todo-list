import { ApiPath, ContentType, HttpMethod } from '~/common/enums/enums.js';

class Todos {
  #baseUrl;
  #basePath;
  #http;

  constructor ({ baseUrl, http }) {
    this.#baseUrl = baseUrl;
    this.#http = http;
    this.#basePath = ApiPath.TODOS;
  }

  getAll() {
    return this.#http.load(this.#getUrl(), {
      method: HttpMethod.GET,
    });
  }

  create(payload) {
    return this.#http.load(this.#getUrl('add'), {
      method: HttpMethod.POST,
      contentType: ContentType.JSON,
      payload: JSON.stringify(payload),
    });
  }

  #getUrl(path = '') {
    return `${this.#baseUrl}${this.#basePath}/${path}`;
  }
}

export { Todos };