function swapPanels() {
  const greetPanel = document.querySelector(".greet-panel");
  const signInPanel = document.querySelector(".signin-panel");

  greetPanel.classList.toggle("greet-panel--flip");
  signInPanel.classList.toggle("signin-panel--flip");
}

const signUpButton = document.querySelector(".button--signup");
signUpButton.addEventListener("click", swapPanels);
