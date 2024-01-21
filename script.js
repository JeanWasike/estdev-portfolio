/* Adjusting project cards width */
function adjustCardWidth() {
    const container = document.getElementById('projects-container');
    const cards = container.querySelectorAll('.project-card');
  
    const viewportWidth = window.innerWidth;
  
    if (viewportWidth <= 768) {
      cards.forEach(card => {
        card.style.flex = '0 0 100%';
      });
    } else {
      cards.forEach(card => {
        card.style.flex = '0 0 calc(100% - 20px)';
      });
    }
  }
  
  adjustCardWidth();
  
  window.addEventListener('resize', adjustCardWidth);
  