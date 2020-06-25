import { createQueryFromObject } from "~/utils/utils";

interface RequestOptions {
  headers?: Record<string, string>;
  params?: Record<string, string>;
  body?: Record<string, unknown>;
}

class TSHError extends Error {
  code: string;
  data: any;
  name: string;

  constructor(message) {
    super(message);
  }
}

class API {
  request: any;
  baseUrl: string;
  defaultHeaders: RequestOptions["headers"];

  constructor(baseUrl = "") {
    this.baseUrl = baseUrl;
    this.request = null;
    this.defaultHeaders = {
      "Content-Type": "application/json",
    };
  }

  get(url, options: RequestOptions) {
    const params = options.params ? `?${createQueryFromObject(options.params)}` : "";

    this.request = fetch(`${this.baseUrl}${url}${params}`, {
      method: "GET",
      headers: {
        ...this.defaultHeaders,
        ...options.headers,
        Authorization:
          (options.headers && options.headers.Authorization) ||
          this.defaultHeaders.Authorization ||
          "",
      },
    });

    return this;
  }

  post(url, options: RequestOptions = {}) {
    this.request = fetch(`${this.baseUrl}${url}`, {
      method: "POST",
      body: JSON.stringify(options.body),
      headers: {
        ...this.defaultHeaders,
        ...options.headers,
      },
    });

    return this;
  }

  put(url, options: RequestOptions = {}) {
    this.request = fetch(`${this.baseUrl}${url}`, {
      method: "PUT",
      body: JSON.stringify(options.body),
      headers: {
        ...this.defaultHeaders,
        ...options.headers,
      },
    });

    return this;
  }

  delete(url, options: RequestOptions = {}) {
    this.request = fetch(`${this.baseUrl}${url}`, {
      method: "DELETE",
      body: JSON.stringify(options.body),
      headers: {
        ...this.defaultHeaders,
        ...options.headers,
      },
    });

    return this;
  }

  patch(url, options: RequestOptions = {}) {
    this.request = fetch(`${this.baseUrl}${url}`, {
      method: "PATCH",
      body: JSON.stringify(options.body),
      headers: {
        ...this.defaultHeaders,
        ...options.headers,
      },
    });

    return this;
  }

  json() {
    return this.request
      .then(response => {
        return Promise.all([
          Promise.resolve(!response.ok),
          this.resolveJSON(response),
          response,
        ]);
      })
      .then(([failed, payload, response]) => {
        if (failed) {
          const error = new TSHError(payload.message || response.statusText);
          error.code = response.status;
          error.data = payload;

          throw error;
        }

        return payload;
      });
  }

  text() {
    return this.request
      .then(response => {
        return Promise.all([Promise.resolve(!response.ok), response.text(), response]);
      })
      .then(([failed, payload, response]) => {
        if (failed) {
          const error = new TSHError(payload || response.statusText);
          error.code = response.status;
          error.data = payload;

          throw error;
        }

        return payload;
      });
  }

  isSuccess() {
    return this.json().then(() => true);
  }

  response() {
    return this.request.then(response => {
      return response;
    });
  }

  // eslint-disable-next-line class-methods-use-this
  resolveJSON(response) {
    return response.text().then(text => {
      try {
        return Promise.resolve(JSON.parse(text));
      } catch (e) {
        return Promise.resolve({});
      }
    });
  }

  setDefaultHeaders(headers) {
    this.defaultHeaders = headers;
  }
}

export default function createTSH_Instance(baseUrl: string): API {
  return new API(baseUrl);
}
