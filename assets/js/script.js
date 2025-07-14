document.addEventListener('DOMContentLoaded', function() {
    // 1. Funcionalidad de navegación responsive
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
            this.innerHTML = navMenu.style.display === 'flex' ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
        
        // Manejar cambios de tamaño de pantalla
        function handleResponsiveNav() {
            if (window.innerWidth > 768) {
                navMenu.style.display = 'flex';
                navToggle.innerHTML = '<i class="fas fa-bars"></i>';
            } else {
                navMenu.style.display = 'none';
            }
        }
        
        window.addEventListener('resize', handleResponsiveNav);
        handleResponsiveNav();
    }
    
    // 2. Funcionalidad de filtrado de productos
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    
    if (filterButtons.length > 0 && productCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Actualizar botones activos
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Filtrar productos
                const category = this.dataset.category;
                productCards.forEach(card => {
                    card.style.display = (category === 'all' || card.dataset.category === category) ? 
                        'block' : 'none';
                });
            });
        });
    }
    
    // 3. Galería de imágenes de productos
    const mainImage = document.querySelector('.main-image');
    const thumbnails = document.querySelectorAll('.thumbnails img');
    
    if (mainImage && thumbnails.length > 0) {
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', function() {
                // Actualizar imagen principal
                mainImage.src = this.src;
                
                // Actualizar miniatura activa
                thumbnails.forEach(img => img.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }
    
    // 4. Selector de tallas
    const sizeButtons = document.querySelectorAll('.size-btn');
    
    if (sizeButtons.length > 0) {
        sizeButtons.forEach(button => {
            button.addEventListener('click', function() {
                sizeButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }
    
    // 5. Formulario de contacto
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validación básica
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !message) {
                alert('Por favor complete todos los campos obligatorios');
                return;
            }
            
            // Simular envío
            alert('¡Gracias por su mensaje! Nos pondremos en contacto pronto.');
            this.reset();
        });
    }
    
    // 6. Botones de WhatsApp
    const whatsappButtons = document.querySelectorAll('.whatsapp-btn');
    
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Prevenir comportamiento predeterminado si es un enlace
            if (this.tagName === 'A') e.preventDefault();
            
            const productName = document.querySelector('.product-info h2')?.textContent || 'un producto';
            const message = `Hola VerdeModa, estoy interesado en ${productName}. ¿Podrían darme más información?`;
            window.open(`https://wa.me/56912345678?text=${encodeURIComponent(message)}`, '_blank');
        });
    });
});