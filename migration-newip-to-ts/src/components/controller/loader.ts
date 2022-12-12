import type { urlParts, callback } from '../../types/interfaceType';

class Loader {
  readonly options: { apiKey: string };
  readonly baseLink: string;

  constructor(baseLink: string, options: { apiKey: string }) {
    this.baseLink = baseLink;
    this.options = options;
  }

  getResp<T>(url: urlParts, callback: callback<T>) {
    this.load('GET', url.endpoint, callback, this.options);
  }

  errorHandler(res: Response): Response | never {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404)
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }

    return res;
  }

  makeUrl(options: { apiKey: string }, endpoint: string) {
    const urlOptions = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key as keyof typeof urlOptions]}&`;
    });

    return url.slice(0, -1);
  }

  load<T>(method: string, endpoint: string, callback: callback<T>, options: { apiKey: string }) {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res) => res.json())
      .then((data) => callback(data))
      .catch((err) => console.error(err));
  }
}

export default Loader;
