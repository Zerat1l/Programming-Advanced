function lockedProfile() {
  Array.from(document.querySelectorAll(".profile button")).forEach((btn) => {
    btn.addEventListener("click", onClick);
  });

  function onClick(event) {
    const parent = event.target.parentElement;
    const unlockedCheck = parent.querySelector('input[value = "unlock"]');
    if (unlockedCheck.checked) {
      const hiddenDiv = parent.querySelector("div");
      const currBtn = parent.querySelector("button");
      hiddenDiv.style.display === "block"
        ? (hiddenDiv.style.display = "none")
        : (hiddenDiv.style.display = "block");

      currBtn.textContent === "Show more"
        ? (currBtn.textContent = "Hide it")
        : (currBtn.textContent = "Show more");
    }
  }
}
