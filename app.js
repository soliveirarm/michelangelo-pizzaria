const burgerBtn = document.querySelector("#burgerBtn")
const nav = document.querySelector("#menu")
const header = document.querySelector("header")
const cartBtn = document.querySelector("#cartBtn")
const bar = document.querySelector(".bar")
const barContainer = document.querySelector(".barContainer")
const menuList = document.querySelector("#menu-list")

function toggleMenu() {
  nav.classList.toggle("active")

  if (nav.classList.contains("active")) {
    burgerBtn.innerHTML = "<i class='fa-solid fa-xmark'></i>"
    burgerBtn.style.color = "hsl(48, 100%, 52%)"
    burgerBtn.style.zIndex = "101"
    burgerBtn.style.position = "fixed"
    burgerBtn.style.left = "92%"
  } else {
    burgerBtn.innerHTML = "<i class='fa-solid fa-bars'></i>"
    burgerBtn.style.color = "hsl(21, 70%, 24%)"
    burgerBtn.style.position = "static"
  }
}

function floatingCartBtn() {
  window.innerWidth < 1025
    ? bar.appendChild(cartBtn)
    : menuList.appendChild(cartBtn)
}

window.addEventListener("resize", floatingCartBtn)
floatingCartBtn()
