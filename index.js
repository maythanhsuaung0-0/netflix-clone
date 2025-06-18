// carousel
var carousel = document.querySelector(".carousel")
var leftBtn = document.querySelector("#left-control")
var rightBtn = document.querySelector("#right-control")
function updateBtns() {
  var scrollWidth = carousel.scrollWidth
  var clientWidth = carousel.clientWidth
  var leftScroll = carousel.scrollLeft
  leftBtn.style.display = leftScroll > 0 ? "grid" : "none";
  rightBtn.style.display = scrollWidth > leftScroll + clientWidth ? "grid" : "none"
}
const scroll = 1024
leftBtn.addEventListener('click', function() {
  console.log("clicked")
  carousel.scrollBy({ left: -scroll, behavior: 'smooth' })
})
rightBtn.addEventListener('click', function() {
  console.log("clicked")
  carousel.scrollBy({ left: scroll, behavior: 'smooth' })
})
carousel.addEventListener("scroll", updateBtns);
window.addEventListener("load", updateBtns);
window.addEventListener("resize", updateBtns);


//dropdown
var questions = document.querySelectorAll(".dropdown-q")
var answers = document.querySelectorAll(".dropdown-a")
function updateDropdown(node){
  node.classList.toggle("display-none")
}
for (var i = 0; i < questions.length; i++) {
  questions[i].addEventListener('click', (event) => {
    updateDropdown(event.target.nextElementSibling)
    event.target.lastElementChild.classList.toggle('rotate')
    console.log(event.target)
  })
}
