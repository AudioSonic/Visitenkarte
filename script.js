const button = document.getElementById("ueberMich");
const text = document.getElementById("ueberMichText");

button.addEventListener("click", () => {
    text.classList.toggle("active");
});