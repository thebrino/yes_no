window.onload = function () {
  move();
};

function move() {
  const wrapper = document.querySelector(".wrapper");
  const noBtn = document.getElementById("no-btn");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();
  const a =
    Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
  const b =
    Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;

  noBtn.style.left = a + "px";
  noBtn.style.top = b + "px";
}
