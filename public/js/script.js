// Objeto com as informações de cada aba
const contentData = {
    sobre: {
        title: "Sobre nós",
        text: "A instituição caracteriza-se como uma casa de acolhimento destinada a <strong>mulheres de 18 a 59 anos e seus filhos que possuem até 17 anos</strong> A instituição caracteriza-se como uma casa de acolhimento destinada a mulheres de 18 a 59 anos e seus filhos que possuem até 17 anos, que encontram-se em situação de rua e vulnerabilidade relacionada a gênero.",
        img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800"
    },
    missao: {
        title: "Nossa Missão",
        text: "Oferecer assistência e acolhimento de forma individual com serenidade e determinação, suprindo as necessidades humanas básicas e respeitando os princípios da ética no processo do cuidar, proporcionando desta forma condições que potencialize a sua inclusão.",
        img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800"
    },
    visao: {
        title: "Nossa Visão",
        text: "Ser reconhecida como Instituição de acolhimento, referência na região metropolitana de Salvador no atendimento com excelência e qualidade.",
        img: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=800"
    },
    valores: {
        title: "Nossos Valores",
        text: "atuar durante toda assistência com calor humano, determinação, empatia, hospitalidade, respeito e serenidade, preservando a individualidade.",
        img: "https://static.significados.com.br/foto/valores-og.jpg"
    }
};

// Selecionando os elementos
const tabs = document.querySelectorAll('.tab');
const titleElem = document.getElementById('about-title');
const textElem = document.getElementById('about-text');
const imgElem = document.getElementById('about-img');

const menuIcon = document.querySelector('.mobile-menu-icon');
const navList = document.querySelector('.nav-list');

menuIcon.addEventListener('click', () => {
    navList.classList.toggle('active');
});

// Função para trocar o conteúdo
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = tab.getAttribute('data-target');
        const data = contentData[target];

        // 1. Atualiza classe ativa nos botões
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // 2. Aplica animação de saída/entrada simples
        titleElem.parentElement.classList.remove('fade-in');
        void titleElem.offsetWidth; // Truque para reiniciar animação CSS
        titleElem.parentElement.classList.add('fade-in');

        // 3. Substitui os textos e imagem
        titleElem.innerText = data.title;
        textElem.innerHTML = data.text;
        imgElem.src = data.img;
    });
});
