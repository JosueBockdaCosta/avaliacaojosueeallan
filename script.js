// Ouvinte de evento que aguarda o carregamento completo do conteúdo da página
document.addEventListener('DOMContentLoaded', () => {

    // Inicializa o índice do slide (o primeiro slide)
    let slideIndex = 0;

    // Seleciona todas as imagens dentro do carrossel (elementos com a classe 'carousel-slide')
    const slides = document.querySelectorAll('.carousel-slide img');

    // Armazena o número total de slides
    const totalSlides = slides.length;

    // Seleciona o contêiner onde as bolinhas de navegação serão adicionadas
    const dotsContainer = document.querySelector('.dots-container');

    // Cria uma bolinha (dot) para cada slide
    for (let i = 0; i < totalSlides; i++) {
        // Cria um novo elemento <span> que representará uma bolinha de navegação
        const dot = document.createElement('span');

        // Adiciona a classe 'dot' ao novo <span>, para aplicar os estilos definidos no CSS
        dot.classList.add('dot');

        // Adiciona um ouvinte de evento de clique à bolinha para alterar o slide
        dot.addEventListener('click', () => showSlide(i));

        // Adiciona a bolinha recém-criada ao contêiner de bolinhas
        dotsContainer.appendChild(dot);
    }

    // Seleciona todas as bolinhas (dots) geradas
    const dots = document.querySelectorAll('.dot');

    // Função que exibe o slide com base no índice (index) e atualiza as bolinhas de navegação
    function showSlide(index) {
        // Atualiza o índice do slide atual, considerando que o índice deve se reiniciar quando atingir o final dos slides
        slideIndex = index % totalSlides;

        // Move o carrossel para o slide correspondente usando a transformação CSS 'translateX'
        document.querySelector('.carousel-slide').style.transform = `translateX(-${slideIndex * 100}%)`;

        // Atualiza as bolinhas de navegação, marcando a bolinha correspondente ao slide atual como "ativa"
        dots.forEach((dot, i) => {
            // Adiciona a classe 'active' à bolinha correspondente ao slide ativo
            dot.classList.toggle('active', i === slideIndex);
        });
    }

    // Função para avançar para o próximo slide
    function nextSlide() {
        showSlide(slideIndex + 1);
    }

    // Função para retroceder para o slide anterior
    function prevSlide() {
        showSlide(slideIndex - 1);
    }

    // Intervalo automático para avançar os slides a cada 6 segundos (6000 milissegundos)
    setInterval(nextSlide, 6000);

    // Exibe o primeiro slide quando a página é carregada
    showSlide(slideIndex);
});
