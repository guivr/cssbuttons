window.onload = function () {
    var panel = document.getElementById("panel");
    var expandButton = document.getElementById("expandButton");
    var panelScrim = document.getElementById("panelScrim");
    
    if (expandButton) {
        expandButton.addEventListener("click", function(event) {
            panel.classList.toggle("open");
            event.preventDefault();
        });
    }

    if (expandButton) {
        panelScrim.onclick = function(event) {
            event.preventDefault();
            panel.classList.toggle("open");
        };
    }
}
