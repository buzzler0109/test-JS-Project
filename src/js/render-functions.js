import { refs } from '../main';

export function categoriesTemplate(data) {
  return data
    .map(book => {
      return `<li class="categories-item">
  
   ${book.list_name}
  
  </li>`;
    })
    .join('\n');
}

export function categoriesRender(data) {
  const markup = categoriesTemplate(data);
  refs.categories.insertAdjacentHTML('beforeend', markup);
}
