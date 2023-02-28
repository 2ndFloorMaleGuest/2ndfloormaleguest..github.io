let myimage = document.querySelector("img");

myimage.onclick = function () {
  let mysrc = myimage.getAttribute("src");
  if (mysrc === "images/firefox-icon.png") {
    myimage.setAttribute("src", "images/firefox2.png");
  } else {
    myimage.setAttribute("src", "images/firefox-icon.png");
  }
};

let mybutton = document.querySelector("button");
let myheading = document.querySelector("h1");

function setusername() {
  let myname = prompt("请输入你的名字");
  localStorage.setItem("name", myname);
  myheading.textContent = "你好" + myname;
}

if (!localStorage.getItem("name")) {
  setusername();
} else {
  let storedname = localStorage.getItem("name");
  myheading.textContent = "你好" + storedname;
}

mybutton.onclick = function () {
  setusername();
};
