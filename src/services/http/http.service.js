import { HttpHeader, HttpMethod } from '~/common/enums/enums.js';

class Http {
  load(url, options = {}) {
    const { method = HttpMethod.GET, payload = null, contentType } = options;
    const headers = this.#getHeaders({
      contentType,
    });

    return fetch(url, {
      method,
      headers,
      body: payload,
    })
      .then(this.#parseJSON)
      .catch(this.#throwError);
  }

  #getHeaders({ contentType }) {
    const headers = new Headers();

    if (contentType) {
      headers.append(HttpHeader.CONTENT_TYPE, contentType);
    }

    return headers;
  }

  #parseJSON(response) {
    return response.json();
  }

  #throwError(err) {
    throw err;
  }
}

export { Http };
