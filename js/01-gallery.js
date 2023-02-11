import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const mainDivForGallery = document.querySelector(".gallery");
// console.log(mainDivForGallery);

const insertImgFromArrayToGallery = galleryItems
  .map(({ preview, original, description }) => {
    console.log(preview, original, description);
    return `<div class="gallery__item"><a class="gallery__link" href="${original}"><img
      class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></div>`;
  })
  .join("");

mainDivForGallery.innerHTML = insertImgFromArrayToGallery;

console.log(insertImgFromArrayToGallery);
