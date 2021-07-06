var currentImage;
var thumbnails, thumbnailButtons;

window.addEventListener('DOMContentLoaded', function(e) {
  currentImage = document.querySelector('.current-image');
  
 
  $('.thumbnails').on('init', function(e, slick) {
    thumbnailButtons = document.querySelectorAll('.thumbnails .thumbnail .thumbnail-button');
    thumbnailButtons.forEach(function(thumbnailButton) {
      thumbnailButton.addEventListener('click', function(e) {
        activateThumbnail(thumbnailButton);
      });
    });
  });

  
  $('.thumbnails').slick({
    slidesToShow: 3,
    prevArrow: '<button class="previous-button button">' +
               '  <span class="fas fa-angle-left" aria-hidden="true"></span>' +
               '  <span class="sr-only">Previous slide</span>' +
               '</button>',
    nextArrow: '<button class="next-button button">' +
               '  <span class="fas fa-angle-right" aria-hidden="true"></span>' +
               '  <span class="sr-only">Next slide</span>' +
               '</button>',
    infinite: false,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  

  function activateThumbnail(thumbnailButton) {
    var newImageSrc = thumbnailButton.querySelector('img').getAttribute('src');
    var newImageAlt = thumbnailButton.querySelector('img').getAttribute('data-full-alt');
    currentImage.querySelector('img').setAttribute('src', newImageSrc);
    currentImage.querySelector('img').setAttribute('alt', newImageAlt);
    thumbnailButtons.forEach(function(button) {
      button.removeAttribute('aria-current');
    });
    thumbnailButton.setAttribute('aria-current', true);
  }  
});