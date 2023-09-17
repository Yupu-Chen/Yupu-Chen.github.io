const home = document.getElementById("home");
const blogs = document.getElementById("blogs");
const about = document.getElementById("about");
const homeBtn = document.getElementById("home-btn");
const blogBtn = document.getElementById("blog-btn");
const aboutBtn = document.getElementById("about-btn");

let buttons;

homeBtn.onclick = function () {
    buttons = 0;
}
blogBtn.onclick = function () {
    buttons = 1;
}
aboutBtn.onclick = function () {
    buttons = 2;
}

blogBtn.addEventListener("click", makeVisible);
homeBtn.addEventListener("click", makeVisible);
aboutBtn.addEventListener("click", makeVisible);


function makeVisible() {
    if (buttons == 1) {
        if (window.getComputedStyle(blogs, null).getPropertyValue("visibility") == "hidden") {
            blogs.style.visibility = "visible";
            home.style.visibility = "hidden";
            about.style.visibility = "hidden";
        }
    } else if (buttons == 0) {
        if (window.getComputedStyle(home, null).getPropertyValue("visibility") == "hidden") {
            blogs.style.visibility = "hidden";
            home.style.visibility = "visible";
            about.style.visibility = "hidden";
        }
    } else if (buttons = 2) {
        if (window.getComputedStyle(about, null).getPropertyValue("visibility") == "hidden") {
            blogs.style.visibility = "hidden";
            home.style.visibility = "hidden";
            about.style.visibility = "visible";
        }
    }
}