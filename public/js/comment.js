let xhr = new XMLHttpRequest();
const comment = document.querySelector(".p-comment");
const btn = document.querySelector("#commentBtn");
const pid = document.querySelector("#pid").value;

const username = document.querySelector("#currentUser").innerHTML;
const avatar = document.querySelector("#userAvatar").src;
console.log(username, avatar);

btn.addEventListener("click", () => {
  const userInput = document.querySelector("#userInput").value;
  const userID = document.querySelector("#userID").value;
  sendData(userInput, userID);
  createComment(userInput, username, avatar);
});

function sendData(input, UID) {
  if (!input || !username) {
    return;
  }

  xhr.open("POST", `/products/detail/${pid}`, true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    //Call a function when the state changes.
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log("ok meomeo");
    }
  };

  xhr.send(`productID=${pid}&userID=${UID}&username=${username}&avatar=${avatar}&content=${input}`);
}

function createComment(input, username, avatar) {
  if (input.length < 1 || !username) return;

  if (!avatar) {
    console.log("!avatar", avatar);
    avatar =
      "https://res.cloudinary.com/dfib3gi7p/image/upload/v1654083880/resources/default_Thumbnail_s5whby.jpg";
  }
  const wrap = document.createElement("div");
  wrap.classList.add(
    "flex",
    "w-full",
    "items-center",
    "justify-between",
    "flex-wrap",
    "mb-10",
    "border-b-2",
    "py-2"
  );
  const html = `
  <div class='w-[10%]'>
    <img src=${avatar} class="w-[100px] h-[100px] object-cover rounded-full">
  </div>
  <div class='w-[85%] flex flex-wrap justify-between'>
    <label class="block w-fit"> ${username} </label>
    <div class='flex w-fit'>
      <label class='block mb-3 mr-1 w-fit font-normal text-sm opacity-50'> ${new Date().toLocaleTimeString()}</label>
      <label class='block  w-fit font-normal text-sm opacity-50'> ${new Date().toLocaleDateString(
        "vi-VN"
      )}</label>
    </div>
    <p class='font-normal w-full'>${input}</p>
  </div>`;
  wrap.innerHTML += html.trim();
  comment.prepend(wrap);
  document.querySelector("#userInput").value = "";
}
