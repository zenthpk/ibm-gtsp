const prev  = document.querySelector('.prev1');
const next = document.querySelector('.next1');

const track = document.querySelector('.track1');

let carouselWidth = document.querySelector('.carousel-container1').offsetWidth;

window.addEventListener('resize', () => {
  carouselWidth = document.querySelector('.carousel-container1').offsetWidth;
})

let index1 = 0;

next.addEventListener('click', () => {
  index1++;
  prev.classList.add('show');
  track.style.transform = `translateX(-${index1 * carouselWidth}px)`;
  
  if (track.offsetWidth - (index1 * carouselWidth) < carouselWidth) {
    next.classList.add('hide');
  }
})

prev.addEventListener('click', () => {
  index1--;
  next.classList.remove('hide');
  if (index1 === 0) {
    prev.classList.remove('show');
  }
  track.style.transform = `translateX(-${index1 * carouselWidth}px)`;
})
