var elMenuBtn = document.querySelector(".dark-mode");
var elSiteBody = document.querySelector(".site-body");
var elListItem = document.querySelector(".item-js");
var elFormInput = document.querySelector(".email-input");

// console.log();

elMenuBtn.addEventListener("click", function(){
  elSiteBody.classList.toggle("dark");
  elListItem.classList.toggle("dark");
  elFormInput.classList.toggle("dark");
});