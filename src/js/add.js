// ------------------Preguntas Frecuentes (FAQ) - Script--------------------------------

document.querySelectorAll('.faq-item h3').forEach(item => {
  item.addEventListener('click', function() {
    const answer = this.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});

/*==================== carrusel ====================*/
let currentIndex = 0;
const cards = document.querySelectorAll('.card');
const indicators = document.getElementById('indicators');

// Crear los indicadores según el número de comentarios
cards.forEach((_, i) => {
  const indicator = document.createElement('a');
  indicator.classList.add(i === 0 ? 'active' : '');
  indicator.dataset.index = i;
  indicator.addEventListener('click', () => goToSlide(i));
  indicators.appendChild(indicator);
});

// Función para navegar a una tarjeta específica
function goToSlide(index) {
  currentIndex = index;
  document.getElementById('cardWrapper').style.transform = `translateX(-${index * 100}%)`;
  updateIndicators();
}

// Función para ir al siguiente comentario
function nextSlide() {
  currentIndex = (currentIndex + 1) % cards.length;
  goToSlide(currentIndex);
}

// Función para ir al comentario anterior
function prevSlide() {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  goToSlide(currentIndex);
}

// Actualizar el estado visual de los indicadores
function updateIndicators() {
  document.querySelectorAll('.indicator a').forEach((indicator, i) => {
    indicator.classList.toggle('active', i === currentIndex);
  });
}
