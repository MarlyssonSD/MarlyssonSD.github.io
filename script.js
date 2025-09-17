const toggleBtn = document.getElementById("toggle-theme");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("dark-mode")) {
        toggleBtn.textContent = "🌙 Modo Claro";
    } else {
        toggleBtn.textContent = "🌞 Modo Escuro";
    }
});
