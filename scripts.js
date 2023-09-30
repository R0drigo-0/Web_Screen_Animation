let mainLoader = document.getElementById("main_loader");
let left = document.getElementById("left");
let right = document.getElementById("right");

document.onreadystatechange = () => {
    setTimeout(() => {
        if (document.readyState === "complete") {
            left.classList.add("none");
            right.classList.add("none");
            mainLoader.style.display = "block";
        }
    }, 3500);
};
