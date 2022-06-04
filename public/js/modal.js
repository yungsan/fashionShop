const dataNav = document.querySelectorAll('div[data]');
const modals = document.querySelectorAll('.modal');

dataNav.forEach(el => {
  el.addEventListener('click', () => {
    const target = document.querySelector(`#${el.getAttribute('data')}`);
    
    hidden();
    
    target.style.display = 'flex';
    
    let current = document.querySelector('.activeProfileNav');
    current.classList.remove('activeProfileNav');
    console.log(current);
    el.classList.add('activeProfileNav');
  })
})

function hidden(){
  modals.forEach(el => el.style.display = 'none')
}