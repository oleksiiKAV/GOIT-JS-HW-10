// Add imports above this line
import { galleryItems } from './gallery-items';
import storage from './storage.js';
// Change code below this line
// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);
// <ul> галереи
const gallery = document.querySelector('.gallery');
// add h1
const h1 = document.createElement("h1");
h1.textContent = "GOIT-JS-07 Image gallery Task 02 SimpleLightbox";
// h1.style.visibility = "hidden";
gallery.before(h1);
h1.style.display = "none";
// add items
{/* <li class="gallery__item">
   <a class="gallery__link" href="large-image.jpg">
      <img class="gallery__image" src="small-image.jpg" alt="Image description" />
   </a>
</li> */}
const listItems = [];
galleryItems.forEach(item => {
    // <li> with class "gallery__item"
    const li = document.createElement('li');
    li.classList.add('gallery__item');

    // add link <a> with class "gallery__link" and attr href
    const link = document.createElement('a');
    link.classList.add('gallery__link');
    link.href = item.original;

    // Create <img> with class "gallery__image" and attr src и alt
    const img = document.createElement('img');
    img.classList.add('gallery__image');
    img.src = item.preview;
    img.alt = item.description;

    // Add action into img
    // img.addEventListener('click', (event) => {
    //     event.preventDefault();

    //     const fullImg = basicLightbox.create(`
    //         <img src="${img.dataset.source}" alt="${img.alt}" />`);
    //     fullImg.show();
    //     // add Esc
    //     document.addEventListener('keydown', (event) => {
    //         if (event.key === 'Escape') {
    //             fullImg.close();
    //         }
    //     });
    // });


    // Add <img> into <a>
    link.appendChild(img);

    // Add <a> into <li>
    li.appendChild(link);

    // Add <li> into <ul>
    listItems.push(li);
    // gallery.appendChild(li);

});
gallery.append(...listItems);
// SimpleLightbox.caption=true
let galleryBox = new SimpleLightbox('.gallery a'
    // , {
    //    caption: true,
    //    captionDelay: 250,
    //    captionsData: "alt",
    // }
);
galleryBox.options.caption = true;
galleryBox.options.captionDelay = 250
galleryBox.options.captionsData = "alt"
// galleryBox.refresh()
const CURRENT_IMG = 'currentImageIndex'
galleryBox.on('changed.simplelightbox', () => {
    console.log(galleryBox.currentImageIndex);
    storage.save(CURRENT_IMG, galleryBox.currentImageIndex)
}
)

console.log(galleryBox)

    // gallery.next(); // Next Image