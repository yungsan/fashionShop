const price = document.querySelector('input[name="price"]');
const salePrice = document.querySelector('input[name="salePrice"]');
const btn = document.querySelector('#submitProduct');

salePrice.addEventListener('input', () => {
  let p = Number(price.value);
  let sp = Number(salePrice.value);
  
  if (sp >= p) {
    price.style.border = '2px solid red';
    btn.style.cursor = 'no-drop';
  } else{
    price.style.border = 'none';
    btn.style.cursor = 'default';
  }
})