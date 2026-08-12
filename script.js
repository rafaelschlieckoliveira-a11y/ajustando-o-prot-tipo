const themeToggleBtn = document.getElementById('theme-toggle');

// Função para atualizar o texto do botão conforme o estado
function updateButtonText() {
  if (document.body.classList.contains('dark-mode')) {
    themeToggleBtn.textContent = '☀️ Modo Claro';
  } else {
    themeToggleBtn.textContent = '🌙 Modo Escuro';
  }
}

// Restaura a preferência salva no localStorage ao carregar qualquer página
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark-mode');
}
updateButtonText();

// Evento de clique para alternar o tema e gravar a preferência
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }

  updateButtonText();
});
