import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://newsapi.org/v2/', {
      apiKey: '98d5dce44a9a4d74b8aa39c7c25ce4ee', // получите свой ключ https://newsapi.org/
    });
  }
}

export default AppLoader;
