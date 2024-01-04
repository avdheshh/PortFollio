window.onscroll = function () {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (
      document.body.scrollTop > 500 ||
      document.documentElement.scrollTop > 500
    ) {
      document.querySelector(".nav").style.top = "0";
    } else {
      document.querySelector(".nav").style.top = "-70px";
    }
  }

  let loader = document.querySelector(".loader");

window.addEventListener("load", vanish);
function vanish() {
  loader.classList.add("disappear");
}