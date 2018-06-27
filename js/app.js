const apiKey = 'sq3hqP6fCHcNQtYPM78kghkrr9UcmnOCPVbLPTh6';
const apiUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos';
let currentPage = 1;

function loadPhotos() {
$.ajax({
    url: apiUrl,
    dataType: 'json',
    data: {
        api_key: apiKey,
        page: currentPage,
        sol: 1000
    }
}).done(function (result) {
    console.log(result);

    const $gallery = $('.gallery');

    result.photos.forEach(function (el) {
        const $element = $(`
        <a href="${el.img_src}" class="gallery-element" data-fancybox="gallery">
          <span style="background-image: url(${el.img_src})"></span>
        </a>
        `);

        $gallery.append($element);
    });

    $('.gallery-element').fancybox();

});
}

loadPhotos();

$('.gallery-load-more').on('click',function () {
    currentPage++;
    loadPhotos();
})