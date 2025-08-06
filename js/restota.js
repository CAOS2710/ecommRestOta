/*Slider*/
document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll(".slide");
  let currentIndex = 0;
  let interval;

  function startSlider() {
      interval = setInterval(() => {
          slides[currentIndex].style.transform = "translateX(-100%)";
          currentIndex = (currentIndex + 1) % slides.length;
          slides[currentIndex].style.transform = "translateX(0)";
      }, 5000);
  }

  function stopSlider() {
      clearInterval(interval);
  }

  const slider = document.getElementById("slider");
  slider.addEventListener("mouseenter", stopSlider);
  slider.addEventListener("mouseleave", startSlider);

  // Inicializar slider
  startSlider();

  // Inicializar carouseles
  document.querySelectorAll('.carousel').forEach(carousel => {
      const id = carousel.id;
      scrollCarousel(id, 'check');
  });
});

/*Carrusel*/
function scrollCarousel(id, direction) {
  const container = document.querySelector(`#${id} .carousel-track`);
  const scrollAmount = 220;

  if (direction === 'right') {
      container.scrollLeft += scrollAmount;
  } else {
      container.scrollLeft -= scrollAmount;
  }

  setTimeout(() => {
      const leftBtn = document.querySelector(`#${id} .carousel-btn.left`);
      const rightBtn = document.querySelector(`#${id} .carousel-btn.right`);

      if (container.scrollLeft > 0) {
          leftBtn.style.display = "block";
      } else {
          leftBtn.style.display = "none";
      }

      if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
          rightBtn.style.display = "none";
      } else {
          rightBtn.style.display = "block";
      }
  }, 300);
}

/*SubMenú*/
// Submenú con animación + cierre automático
function toggleSubmenu(id) {
  document.querySelectorAll('.submenu').forEach(menu => {
    if (menu.id !== id) {
      menu.style.maxHeight = null;
    }
  });

  const submenu = document.getElementById(id);
  if (submenu) {
    if (submenu.style.maxHeight) {
      submenu.style.maxHeight = null;
    } else {
      submenu.style.maxHeight = submenu.scrollHeight + "px";
    }
  }
}

// Cerrar submenús al hacer clic afuera
document.addEventListener('click', function(event) {
  const isClickInside = event.target.closest('.opcion');
  
  if (!isClickInside) {
    document.querySelectorAll('.submenu').forEach(menu => {
      menu.style.maxHeight = null;
    });
  }
});

/*Carrito de Compras*/
function toggleCart() {
  const cart = document.getElementById('shoppingCart');
  cart.classList.toggle('open');
}

// Asigna el evento al botón carrito
document.addEventListener("DOMContentLoaded", function() {
  const cartButton = document.querySelector('.fa-cart-shopping').parentElement;
  if (cartButton) {
    cartButton.addEventListener('click', function() {
      toggleCart();
    });
  }
});

function clearCart() {
  const cartContent = document.getElementById('cartContent');
  cartContent.innerHTML = '<p style="text-align:center; margin-top:20px;">Tu carrito está vacío.</p>';
}

/*Item*/

let inCart = false;

function toggleCartItem() {
  const button = document.getElementById('cartButton');
  const alertBox = document.getElementById('alertMessage');
  const alertText = document.getElementById('alertText');
  const alertIcon = document.getElementById('alertIcon');

  if (!inCart) {
    // Agregado
    button.textContent = 'Quitar de Carrito';
    showAlert('Agregado exitosamente', 'fa-check-circle', 'green');
    inCart = true;
  } else {
    // Removido
    button.textContent = 'Agregar al Carrito';
    showAlert('Removido exitosamente', 'fa-times-circle', 'red');
    inCart = false;
  }
}

function showAlert(message, iconClass, iconColor) {
  const alertBox = document.getElementById('alertMessage');
  const alertText = document.getElementById('alertText');
  const alertIcon = document.getElementById('alertIcon');

  alertText.textContent = message;
  alertIcon.className = `fa-solid ${iconClass}`;
  alertIcon.style.color = iconColor;

  alertBox.style.display = 'flex';
  setTimeout(() => {
    alertBox.style.display = 'none';
  }, 2000);
} 

/* Notificaciones */

function toggleNotifications() {
  const board = document.getElementById('notificationsBoard');
  board.classList.toggle('open');
}

function removeNotification(button) {
  const notification = button.parentElement;
  notification.remove();
}

function clearNotifications() {
  const container = document.getElementById('notificationsContent');
  container.innerHTML = '<p style="text-align:center; margin-top:20px;">No hay notificaciones.</p>';
}

document.addEventListener("DOMContentLoaded", function() {
  const bellButton = document.querySelector('.fa-bell').parentElement;
  if (bellButton) {
    bellButton.addEventListener('click', function() {
      toggleNotifications();
    });
  }
});