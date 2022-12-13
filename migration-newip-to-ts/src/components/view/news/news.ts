import './news.css';

import type { INews } from '../../../types/interfaceType';

const imgNewsPlaceholder = require('../../../img/news_placeholder.jpg');

class News {
  draw(data: INews[]) {
    const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

    const fragment = document.createDocumentFragment();
    const newsItemTemp = <HTMLTemplateElement>document.querySelector('#newsItemTemp');

    if (newsItemTemp instanceof DocumentFragment) {
      news.forEach((item, idx) => {
            
        const newsClone = <HTMLElement>newsItemTemp.content.cloneNode(true);

        if (newsClone instanceof DocumentFragment) {
          if (idx % 2) {
            const newsItem = newsClone.querySelector('.news__item');
            if(newsItem) {newsItem.classList.add('alt')}
          }
    
          (<HTMLElement>newsClone.querySelector('.news__meta-photo')).style.backgroundImage = `url(${
            item.urlToImage || imgNewsPlaceholder
          })`;
          const metaAuthor = newsClone.querySelector('.news__meta-author');
          if(metaAuthor) {metaAuthor.textContent = item.author || item.source.name;}
          const metaDate = newsClone.querySelector('.news__meta-date');
          if(metaDate) {metaDate.textContent = item.publishedAt
            .slice(0, 10)
            .split('-')
            .reverse()
            .join('-');}
        
          const descriptionTitle = newsClone.querySelector('.news__description-title');
          if(descriptionTitle) {descriptionTitle.textContent = item.title;}
          const descriptionSource = newsClone.querySelector('.news__description-source');
          if(descriptionSource) {descriptionSource.textContent = item.source.name;}
          const descriptionContent = newsClone.querySelector('.news__description-content');
          if(descriptionContent) {descriptionContent.textContent = item.description;}
          const readMore = newsClone.querySelector('.news__read-more a');
          if(readMore) {readMore.setAttribute('href', item.url);}
        
          fragment.append(newsClone);
        }

      });
    }

    const newsDocument = document.querySelector('.news');
    if(newsDocument) {
      newsDocument.innerHTML = '';
      newsDocument.appendChild(fragment);
    }
  }
}

export default News;