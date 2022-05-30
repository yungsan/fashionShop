const email = document.querySelector('input[type=email]');

email.addEventListener('input', () => {

  const value = email.value;
  if(validateEmail(value)){
    console.log('valid');
    email.style.border = 'none';
    email.style.outlineColor = 'lightgreen';
  } else{
    console.log('invalid');
    email.style.border = '2px solid red';
    email.style.outlineColor = 'red';
  }

})

function validateEmail(value){
  return String(value)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};