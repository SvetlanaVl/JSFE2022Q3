import AppLoader from './appLoader';
import type { sourceResponse, newsResponse, callback } from '../../types/interfaceType';

class AppController extends AppLoader {
  getSources(callback: callback<sourceResponse>) {
    super.getResp<sourceResponse>(
      {
        endpoint: 'sources',
      },
      callback
    );
  }

  getNews(e: Event, callback: callback<newsResponse>) {
    let target = <HTMLElement>e.target;
    const newsContainer = <HTMLElement>e.currentTarget;

    while (target !== newsContainer) {
      if (target.classList.contains('source__item')) {
        const sourceId = target.getAttribute('data-source-id');
        if(sourceId) {
          if (newsContainer.getAttribute('data-source') !== sourceId) {
            newsContainer.setAttribute('data-source', sourceId);
            super.getResp<newsResponse>(
              {
                endpoint: 'everything',
                options: {
                  sources: sourceId,
                },
              },
              callback
            );
          }
          return;
        }
      }
      target = target.parentNode as HTMLElement;
    }
  }
}

export default AppController;