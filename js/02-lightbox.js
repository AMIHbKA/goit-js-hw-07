import { galleryItems } from "./gallery-items.js";
// Change code below this line

// creating gallery items
const galleryRef = document.querySelector(".gallery");

const createGalleryItems = (galleryItems) =>
  galleryItems
    .map(
      ({ preview, original, description }) => `
      <li>
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </li>`
    )
    .join("");

const galleryItemsMarkup = createGalleryItems(galleryItems);
galleryRef.innerHTML = galleryItemsMarkup;

let gallery = new SimpleLightbox(".gallery a", {
  captionSelector: "img",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
gallery.on("show.simplelightbox", function () {
  console.log("func");
  // do something…
});

gallery.on("error.simplelightbox", function (e) {
  console.log(e); // some usefull information
});
