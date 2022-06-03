//place the current year in the footer
const dt = new Date();
const year = dt.getFullYear();
document.querySelector("#year").textContent = year;
//get all the images that have the data-src attribute
let images = document.querySelectorAll('img[data-src]');

//options for the interection
const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px -100px 0px"
};

//create a intersection observer object
const observer = new IntersectionObserver((imgElements, observer) => {
    imgElements.forEach(image =>{
        if(!image.isIntersecting){
            return;
        } else{
            loadImage(image.target);
            observer.unobserve(image.target);
        }
    })
}, imgOptions);

const loadImage = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

images.forEach(image => {
    observer.observe(image);
})