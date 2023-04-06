let hamburger = document.querySelector(".hamburger");
let allBars = document.querySelectorAll(".bar");
let ul = document.querySelector("ul");

hamburger.addEventListener("click", () => {
  allBars.forEach((eachBar) => {
    if (eachBar.classList.contains("active")) {
      eachBar.classList.remove("active");
      ul.classList.remove("active");
    } else {
      eachBar.classList.add("active");
      ul.classList.add("active");
    }
    // if (eachBar.classList.contains("active")) {
    //   list.style.display = "flex";
    // } else {
    //   list.style.display = "none";
    // }
  });
});
