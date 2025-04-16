document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os botões de toggle
    const toggleButtons = document.querySelectorAll('.link-toggle');
    
    // Variável para armazenar o timeout
    let autoCloseTimeout;
    
    // Adiciona evento de clique a cada botão
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Obtém o ID do conteúdo relacionado
            const targetId = this.getAttribute('aria-controls');
            const targetContent = document.getElementById(targetId);
            
            // Verifica o estado atual
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            
            // Cancela o timeout anterior se existir
            clearTimeout(autoCloseTimeout);
            
            // Fecha todos os outros conteúdos primeiro
            closeAllToggles(this);
            
            // Alterna o conteúdo relacionado
            this.setAttribute('aria-expanded', !isExpanded);
            targetContent.setAttribute('aria-hidden', isExpanded);
            
            // Adiciona fechamento automático após 15 segundos
            if (!isExpanded) {
                autoCloseTimeout = setTimeout(() => {
                    this.setAttribute('aria-expanded', 'false');
                    targetContent.setAttribute('aria-hidden', 'true');
                }, 15000); // 15 segundos
            }
        });
    });
    
    // Função para fechar todos os toggles exceto o atual
    function closeAllToggles(currentButton) {
        toggleButtons.forEach(button => {
            if (button !== currentButton) {
                const targetId = button.getAttribute('aria-controls');
                const targetContent = document.getElementById(targetId);
                
                button.setAttribute('aria-expanded', 'false');
                if (targetContent) {
                    targetContent.setAttribute('aria-hidden', 'true');
                }
            }
        });
    }
    
    // Opcional: Fecha os toggles ao clicar fora
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.link-section')) {
            // Cancela o timeout ao fechar manualmente
            clearTimeout(autoCloseTimeout);
            
            toggleButtons.forEach(button => {
                const targetId = button.getAttribute('aria-controls');
                const targetContent = document.getElementById(targetId);
                
                button.setAttribute('aria-expanded', 'false');
                if (targetContent) {
                    targetContent.setAttribute('aria-hidden', 'true');
                }
            });
        }
    });
});