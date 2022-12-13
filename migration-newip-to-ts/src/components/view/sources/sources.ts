import './sources.css';

import type { ISources } from '../../../types/interfaceType';

class Sources {
  draw(data: ISources[]) {
    const fragment = document.createDocumentFragment();
    const sourceItemTemp = <HTMLTemplateElement>document.querySelector('#sourceItemTemp');

    data.forEach((item) => {
      const sourceClone = <HTMLTemplateElement>sourceItemTemp.content.cloneNode(true);

      (sourceClone.querySelector('.source__item-name') as HTMLElement).textContent = item.name;
      (sourceClone.querySelector('.source__item') as HTMLElement).setAttribute('data-source-id', item.id);

      fragment.append(sourceClone);
    });

    (document.querySelector('.sources') as HTMLElement).append(fragment);
  }
}

export default Sources;
