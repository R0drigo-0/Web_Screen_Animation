let box = document.getElementById("box");
let main = document.getElementById("main");

box.addEventListener("click", (e) => {
    let box_class_list = [...box.classList];
    if (box_class_list.length == 1)
        animation_open();
    else {
        if (box_class_list.includes("animation_open"))  
            animation_close();
        else
            animation_open();
    }
});

function animation_open() {
    if ([...box.classList].includes("animation_close"))
        box.classList.replace("animation_close", "animation_open");
    else
        box.classList.add("animation_open");
}

function animation_close() {
    box.classList.replace("animation_open", "animation_close");
}
