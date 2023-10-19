const burguerBtn = document.querySelector("#burguer-btn"),
  nav = document.querySelector("#menu"),
  header = document.querySelector("header"),
  mediaQuery = window.matchMedia("(max-width: 1025px)");

function toggleMenu() {
  nav.classList.toggle("active");

  if (nav.classList.contains("active")) {
    burguerBtn.innerHTML = "<i class='fa-solid fa-xmark'></i>";
    burguerBtn.style.color = "var(--second)";
    burguerBtn.style.zIndex = "101";
    burguerBtn.style.position = "fixed";
    burguerBtn.style.left = "92%";
  } else {
    burguerBtn.innerHTML = "<i class='fa-solid fa-bars'></i>";
    burguerBtn.style.color = "var(--main)";
    burguerBtn.style.position = "static";
  }
}

const cartBtn = document.querySelector("#cart-btn"),
  bar = document.querySelector(".bar"),
  barContainer = document.querySelector(".bar-container"),
  menuItems = document.querySelector("#menu__items");

function floatingCartBtn() {
  mediaQuery.matches
    ? bar.appendChild(cartBtn)
    : menuItems.appendChild(cartBtn);
}

window.addEventListener("resize", floatingCartBtn);
document.body.onload = floatingCartBtn();
