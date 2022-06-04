const deleteBtn = document.querySelector('#btn-delete');
const nah = document.querySelector('#nah');
const sure = document.querySelector('#sure');
const background = document.querySelector('#dim-bg');
const warning = document.querySelector('#warning')

deleteBtn.addEventListener('click', () => {
  warning.classList.toggle('hidden');
  background.classList.toggle('hidden');
})

nah.addEventListener('click', () => {
  deleteBtn.click();
})