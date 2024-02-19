document.addEventListener("mouseover", function (event) {
  var target = event.target;
  var styles = window.getComputedStyle(target);
  console.log("CSS content of the element:", styles.cssText);
});
