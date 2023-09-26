document.addEventListener("DOMContentLoaded", function () {
  const changeTextButton = document.getElementById("changeText");

  changeTextButton.addEventListener("click", function () {
    const heading = document.querySelector("h1");
    heading.textContent = "Hello, Chrome Extension!";
  });
});
