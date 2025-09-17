
const toggleBtns = document.querySelectorAll(".toggle-theme-btn");

toggleBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        document.body.classList.toggle("light-mode");

        const isDarkMode = document.body.classList.contains("dark-mode");
        const newText = isDarkMode ? "🌙 Modo Claro" : "🌞 Modo Escuro";
        
        // Atualiza o texto em AMBOS os botões para manter a consistência
        toggleBtns.forEach(b => b.textContent = newText);
    });
});

// --- Lógica para o menu responsivo (hambúrguer) ---
const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.querySelector(".sidebar");

// Adiciona um "escutador" de evento de clique no botão
menuToggle.addEventListener("click", () => {
    // Adiciona ou remove a classe 'menu-open' na sidebar
    sidebar.classList.toggle("menu-open");
});