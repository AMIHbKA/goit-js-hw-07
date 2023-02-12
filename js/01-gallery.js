import { galleryItems } from "./gallery-items.js";
// Change code below this line

// creating gallery items
const galleryRef = document.querySelector(".gallery");

const createGalleryItems = (galleryItems) =>
  galleryItems
    .map(
      ({
        preview,
        original,
        description,
      }) => `<div class="gallery__item"><a class="gallery__link" href="${original}"><img
      class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></div>`
    )
    .join("");

const galleryItemsMarkup = createGalleryItems(galleryItems);
galleryRef.innerHTML = galleryItemsMarkup;

// event delegation
galleryRef.addEventListener("click", onGalleryClickHandler);

function onGalleryClickHandler(e) {
  e.preventDefault();

  if (e.target.tagName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `
  <div class="modal">
    <img class="modal-img" src="${e.target.dataset.source}">
  </div>
`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onEscKeyPress);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", onEscKeyPress);
      },
    }
  );

  instance.show();

  // Честно говоря мне такой вариант не очень нравится, но он работает. Очень бы хотелось узнать как правильно и красиво сделать закрытие по нажатию Esc
  function onEscKeyPress(e) {
    if (e.code.toLowerCase() !== "escape") {
      return;
    }
    instance.close();
  }
}
