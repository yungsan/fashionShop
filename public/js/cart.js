const PID = document.querySelector("#pid").value;
const UID = document.querySelector("#userID").value;
const addToCartBtn = document.querySelector('#addToCart');
let xhr = new XMLHttpRequest();

addToCartBtn.addEventListener('click', () => {
  const amount = document.querySelector('#numberCount').innerHTML;
  const size = document.querySelector('input[name="size"]:checked').value;
  
  xhr.open("POST", `/carts/addToCart`, true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    //Call a function when the state changes.
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log("cart send fail");
    }
  };
  
  xhr.send(
    `userID=${UID}&productID=${PID}&amount=${amount}&size=${size}`
  );
})
