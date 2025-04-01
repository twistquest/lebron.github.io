const bron = document.getElementById("bron");

let rotated = false;

bron.addEventListener("click", () => {
    if (rotated) {
        bron.style.transform = "rotate(0)";
        rotated = false;
    } else {
        bron.style.transform = "rotate(360deg)";
        rotated = true;
    }
});