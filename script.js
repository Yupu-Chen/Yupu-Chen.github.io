const home = document.getElementById("home");
const blogs = document.getElementById("blogs");
const about = document.getElementById("about");
const homeBtn = document.getElementById("home-btn");
const blogBtn = document.getElementById("blog-btn");
const aboutBtn = document.getElementById("about-btn");
const slides = document.querySelectorAll(".slide");

const MFF30 = document.getElementById("MFF30");

MFF30.onclick = function () {
    if (window.getComputedStyle(blogs, null).getPropertyValue("visibility") == "hidden") {
        blogs.style.visibility = "visible";
        home.style.visibility = "hidden";
        about.style.visibility = "hidden";
    }
}

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

// slider code reference: https://blog.logrocket.com/build-image-carousel-from-scratch-vanilla-javascript/
slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${indx * 100}%)`;
});

// current slide counter
let curSlide = 0;

let maxSlide = slides.length - 1;

// select next slide button
const nextSlide = document.querySelector("#next");

// add event listener and next slide functionality
nextSlide.addEventListener("click", function () {
    if (curSlide == maxSlide) {
        curSlide = 0;
    } else {
        curSlide++;
    }
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
});

// select prev slide button
const prevSlide = document.querySelector("#prev");

// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

  //   move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});