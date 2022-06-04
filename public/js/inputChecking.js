const username = document.querySelector('input[name=username]');
const email = document.querySelector('input[name=email]');
const btn = document.querySelector('#btn');

username.addEventListener('input', () => {
  check(username);
})

email.addEventListener('input', () => {
  check(email);
})

function check(input){
  if (input.value.length == 0) {
    btn.style.pointerEvents = 'none';
    btn.style.cursor = 'not-allowed';
  } else{
    btn.style.pointerEvents = 'auto';
    btn.style.cursor = 'pointer';
  }
}