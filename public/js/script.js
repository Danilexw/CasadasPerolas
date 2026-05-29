document.addEventListener("DOMContentLoaded", function() {
    
    // === SISTEMA DO MENU HAMBÚRGUER MOBILE & FECHAMENTO EXTERNO ===
    const menuIcon = document.querySelector(".mobile-menu-icon");
    const navList = document.querySelector(".nav-list");
    const navLinks = document.querySelectorAll(".nav-list li a");

    if (menuIcon && navList) {
        // Função isolada para abrir/fechar o menu
        function toggleMenu() {
            menuIcon.classList.toggle("open");   // Transforma o botão em X
            navList.classList.toggle("active");   // Desliza a barra lateral e escurece o fundo
            
            if (navList.classList.contains("active")) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "";
            }
        }

        // Abre/Fecha ao clicar no ícone
        menuIcon.addEventListener("click", function(e) {
            e.stopPropagation(); // Impede que o clique no botão propague para o documento
            toggleMenu();
        });

        // Fecha o menu automaticamente ao clicar em um link interno
        navLinks.forEach(link => {
            link.addEventListener("click", function() {
                menuIcon.classList.remove("open");
                navList.classList.remove("active");
                document.body.style.overflow = "";
            });
        });

        // MÁGICA DETECTORA: Fecha o menu se o usuário clicar em qualquer lugar FORA da sidebar
        document.addEventListener("click", function(event) {
            // Verifica se o menu está aberto
            const isMenuOpen = navList.classList.contains("active");
            
            // Verifica se o clique ocorreu dentro da lista (sidebar) ou no próprio ícone
            const isClickInsideMenu = navList.contains(event.target);
            const isClickOnIcon = menuIcon.contains(event.target);

            // Se o menu estiver aberto e o clique foi no fundo preto (fora de ambos), fecha o menu!
            if (isMenuOpen && !isClickInsideMenu && !isClickOnIcon) {
                menuIcon.classList.remove("open");
                navList.classList.remove("active");
                document.body.style.overflow = "";
            }
        });
    }

    // ==========================================================================
    // 2. SISTEMA DE NAVEGAÇÃO POR ABAS (SOBRE NÓS)
    // ==========================================================================
    const contentData = {
        sobre: {
            title: "Sobre nós",
            text: "A instituição caracteriza-se como uma casa de acolhimento destinada a <strong>mulheres de 18 a 59 anos e seus filhos que possuem até 17 anos</strong>, que encontram-se em situação de rua e vulnerabilidade relacionada a gênero.",
            img: "imgs/mocasfoto.png"
        },
        missao: {
            title: "Nossa Missão",
            text: "Oferecer assistência e acolhimento de forma individual com serenidade e determinação, suprindo as necessidades humanas básicas e respeitando os princípios da ética no processo do cuidar, proporcionando desta forma condições que potencialize a sua inclusão.",
            img: "imgs/missao.png"
        },
        visao: {
            title: "Nossa Visão",
            text: "Ser reconhecida como Instituição de acolhimento, referência na região metropolitana de Salvador no atendimento com excelência e qualidade.",
            img: "imgs/visao.png"
        },
        valores: {
            title: "Nossos Valores",
            text: "Atuar durante toda assistência com calor humano, determinação, empatia, hospitalidade, respeito e serenidade, preservando a individualidade.",
            img: "imgs/coracao.png"
        }
    };

    const tabs = document.querySelectorAll('.tab');
    const titleElem = document.getElementById('about-title');
    const textElem = document.getElementById('about-text');
    const imgElem = document.getElementById('about-img');

    // Verifica se os elementos das abas existem na página antes de rodar o código
    if (tabs.length && titleElem && textElem && imgElem) {
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const target = tab.getAttribute('data-target');
                const data = contentData[target];

                if (!data) return;

                // 1. Atualiza o estado visual das abas nos botões
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                // 2. Aplica animação CSS de transição limpando o cache de reflow
                const contentContainer = titleElem.parentElement;
                contentContainer.classList.remove('fade-in');
                void contentContainer.offsetWidth; // Truque para forçar o navegador a reiniciar a animação
                contentContainer.classList.add('fade-in');

                // 3. Altera dinamicamente os textos e o link da imagem
                titleElem.innerText = data.title;
                textElem.innerHTML = data.text;
                imgElem.src = data.img;
            });
        });
    }
    
});

// Função para Copiar Chaves e Dados Bancários automaticamente
function copyText(elementId) {
    const textToCopy = document.getElementById(elementId).innerText;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
        // Alerta sutil ou feedback visual pode ser injetado aqui
        alert("Copiado com sucesso: " + textToCopy);
    }).catch(err => {
        console.error("Erro ao copiar texto: ", err);
    });
}