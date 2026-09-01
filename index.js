const tabletBtn = document.getElementById("tablet");
const phoneBtn = document.getElementById("phone");
tabletBtn.addEventListener("click", () => {
  window.location.href = "./tablet/tablet.html";
});
phoneBtn.addEventListener("click", () => {
  window.location.href = "./phone/phone.html";
});
