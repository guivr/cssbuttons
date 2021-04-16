window.onload = function () {
  var n = document.getElementById("panel"),
    e = document.getElementById("expandButton"),
    t = document.getElementById("panelScrim");
  e &&
    e.addEventListener("click", function (e) {
      n.classList.toggle("open");
    }),
    e &&
      (t.onclick = function (e) {
        n.classList.toggle("open");
      });
};
