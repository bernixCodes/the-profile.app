window.addEventListener("load", () => {
  const signInBtn = document.querySelector("button");

  signInBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const email = document.querySelector('input[type="email"]');
    const errorContainer = document.querySelector(".errorContainer");

    if (email.value == "" || email.value == null) {
      email.classList.add("error");
      errorContainer.style.display = "flex";

      setTimeout(() => {
        email.classList.remove("error");
        errorContainer.style.display = "none";
      }, 3000);
    } else {
      window.location.href = `../main/index.html?email=${email.value}`;
    }
  });
});
