// Esse comando serve para o JavaScript só rodar depois que 
// todo o HTML da página estiver carregado, para não dar erro de botão inexistente.
document.addEventListener('DOMContentLoaded', () => {
    
    const form = document.getElementById('meuForm');
    const status = document.getElementById('mensagemStatus');

    // Aqui é onde eu faço a validação que o professor pediu no trabalho.
    form.addEventListener('submit', function(e) {
        
        // Usei isso aqui para a página não dar "refresh" sozinha quando clica no botão.
        e.preventDefault(); 

        // Pegando o que a pessoa escreveu nos campos e tirando espaços vazios.
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        // Verificando se o usuário deixou algum campo em branco.
        if (nome === "" || email === "" || mensagem === "") {
            status.innerText = "Ops! Você precisa preencher todos os campos antes de enviar.";
            status.style.color = "red";
            return;
        }

        // Validação simples para ver se o e-mail tem o @ e o ponto final.
        if (!email.includes("@") || !email.includes(".")) {
            status.innerText = "Esse e-mail não parece certo. Pode dar uma conferida?";
            status.style.color = "red";
            return;
        }

        // Se passar pelos testes acima, mostro a mensagem de sucesso na tela.
        status.innerText = "Valeu, Higor! Mensagem enviada com sucesso (Simulação).";
        status.style.color = "green";
        
        // Limpando os campos do formulário para o próximo envio.
        form.reset();
    });

    // Coloquei esse log só para testar no console se a navegação está funcionando.
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            console.log("Usuário navegando para a seção: " + link.getAttribute('href'));
        });
    });
});