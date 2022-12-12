import './sources.css';

import type { ISources } from '../../../types/interfaceType';

class Sources {
  draw(data: ISources[]) {
    const fragment = document.createDocumentFragment();
    const sourceItemTemp = <HTMLTemplateElement>document.querySelector('#sourceItemTemp');

    data.forEach((item) => {
      const sourceClone = <HTMLTemplateElement>sourceItemTemp.content.cloneNode(true);

      const sourceItemName = sourceClone.querySelector('.source__item-name');
      if(sourceItemName) {sourceItemName.textContent = item.name;}

      const sourceItem = sourceClone.querySelector('.source__item');
      if(sourceItem) {sourceItem.setAttribute('data-source-id', item.id);}

      fragment.append(sourceClone);
    });

    const sourcesDocument = document.querySelector('.sources');
    if(sourcesDocument) {sourcesDocument.append(fragment);}
  }
}

export default Sources;
