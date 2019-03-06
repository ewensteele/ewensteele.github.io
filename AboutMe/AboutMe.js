function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    console.log(rect);
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
   
  function callbackFunc() {
    var items = document.querySelectorAll(".timeline li");
  
    console.log("yes");
    for (var i = 0; i < items.length; i++) {
      console.log(items[i]);
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }
   
  document.addEventListener("load", callbackFunc);
  document.addEventListener("scroll", callbackFunc);