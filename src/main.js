import { booksCategory } from './js/pixabay-api';
import { categoriesRender } from './js/render-functions';

export const refs = {
  categories: document.querySelector('.categories'),
};

async function onPageLoad() {
  const data = await booksCategory();
  categoriesRender(data);
  refs.categoriesItems = document.querySelectorAll('.categories-item');
  refs.categories.addEventListener('click', onCategoriesClick);
}

onPageLoad();

function onCategoriesClick(e) {
  clickAddClass(e);
}

function clickAddClass(e) {
  const target = e.target.closest('li');
  if (!target || target === e.currentTarget) return;

  refs.categoriesItems.forEach(elem => elem.classList.remove('active'));
  target.classList.add('active');
}
