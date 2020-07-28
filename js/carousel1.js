const prev1  = document.querySelector('.prev1');
const next1 = document.querySelector('.next1');

const track1 = document.querySelector('.track1');

let carouselWidth1 = document.querySelector('.carousel-container1').offsetWidth;

window.addEventListener('resize', () => {
  carouselWidth1 = document.querySelector('.carousel-container1').offsetWidth;
})

let index1 = 0;

next1.addEventListener('click', () => {
  index1++;
  prev1.classList.add('show');
  track1.style.transform = `translateX(-${index1 * carouselWidth1}px)`;
  
  if (track1.offsetWidth - (index1 * carouselWidth1) < carouselWidth1) {
    next1.classList.add('hide');
  }
})

prev1.addEventListener('click', () => {
  index1--;
  next1.classList.remove('hide');
  if (index1 === 0) {
    prev1.classList.remove('show');
  }
  track1.style.transform = `translateX(-${index1 * carouselWidth1}px)`;
})
