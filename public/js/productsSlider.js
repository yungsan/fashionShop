const btnRight = document.querySelector('#productSliderRight');
const btnLeft = document.querySelector('#productSliderLeft');
const slider = document.querySelector('#trending .products');
let x = 0;

btnRight.addEventListener('click', () => {
  if (x >= 1350) {
    return;
  }
  btnLeft.style.display = 'block';
  x += 275;

  console.log(x);
  slider.style.transform = `translateX(-${x}px)`;

  if (x >= 1350) {
    btnRight.style.display = 'none';
  }

});

btnLeft.addEventListener('click', () => {
  btnRight.style.display = 'block';
  if (x <= 0) {
    return;
  }
  
  x -= 275;
  console.log(x);
  
  slider.style.transform = `translateX(-${x}px)`;

  if (x <= 0) {
    btnLeft.style.display = 'none';
  }
});

/**
 * 
 * 
 * 
 * 
 */