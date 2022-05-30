const increaseAmount = document.querySelector('#increaseAmount');
const decreaseAmount = document.querySelector('#decreaseAmount');
const numberCount = document.querySelector('#numberCount');

increaseAmount.addEventListener('click', () => {
  numberCount.innerHTML++;
})

decreaseAmount.addEventListener('click', () => {
  if (numberCount.innerHTML > 1) {
    numberCount.innerHTML--;
  }
})