import Loader from './loader';

class AppLoader extends Loader {
  constructor() {
    super('https://nodenews.up.railway.app/', {
      apiKey: '98d5dce44a9a4d74b8aa39c7c25ce4ee', // получите свой ключ https://newsapi.org/
    });
  }
}

export default AppLoader;
