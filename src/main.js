import { booksCategory } from './js/pixabay-api';
import { categoriesRender } from './js/render-functions';

export const refs = {
  categories: document.querySelector('.categories'),
};

async function onPageLoad() {
  const data = await booksCategory();
  console.log(data);
  categoriesRender(data);
}

onPageLoad();

refs.categories.addEventListener('click', e => {
  if (e.target === e.currentTarget) return;
  const liElem = e.target.closest('li');
  liElem.classList.add('active');
});
