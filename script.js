document.getElementById("year").textContent = new Date().getFullYear();

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav nav");
menuBtn?.addEventListener("click", () => {
  const open = nav.style.display === "flex";
  nav.style.display = open ? "" : "flex";
  if (!open) {
    nav.style.position = "absolute";
    nav.style.top = "82px";
    nav.style.left = "0";
    nav.style.right = "0";
    nav.style.padding = "20px 7%";
    nav.style.background = "#f7f4ed";
    nav.style.flexDirection = "column";
    nav.style.borderBottom = "1px solid #ded9cc";
  }
});
