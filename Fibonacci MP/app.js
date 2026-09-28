/**
 * PROJETART PLANEJADOS — COMPORTAMENTOS & INTERATIVIDADE
 * Gerencia navegação, lightbox, carrossel de depoimentos, filtros de galeria e WhatsApp dinâmico.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. CARREGAR DADOS DE CONFIGURAÇÃO (config.js)
  const config = typeof PROJETART_CONFIG !== 'undefined' ? PROJETART_CONFIG : {
    whatsappNumber: "5511999998888",
    whatsappMessages: {
      hero: "Olá, Projetart! Gostaria de solicitar um orçamento para o meu projeto planejado.",
      ambientesCozinha: "Olá! Vi as cozinhas planejadas no site e gostaria de um projeto exclusivo.",
      ambientesDormitorio: "Olá! Gostaria de mais informações e orçamento para dormitório sob medida.",
      ambientesLiving: "Olá! Gostaria de um orçamento para projeto de living e salas integradas.",
      galeria: "Olá! Gostei muito dos projetos da galeria da Projetart e quero um orçamento.",
      ctaFinal: "Olá, Projetart! Quero falar com um especialista e transformar meu ambiente com móveis de alto padrão.",
      floating: "Olá! Gostaria de tirar dúvidas e solicitar uma consultoria sem compromisso."
    },
    companyName: "Projetart Planejados",
    address: "Av. Duque de Caixias, 1200 - Jardins, São Paulo - SP",
    openingHours: "Seg. a Sex. 09h às 19h | Sáb. 09h às 14h"
  };

  // Atualizar dados de rodapé e ano
  const footerAddress = document.getElementById('footerAddress');
  const footerHours = document.getElementById('footerHours');
  const footerPhone = document.getElementById('footerPhone');
  const currentYearSpan = document.getElementById('currentYear');

  if (footerAddress && config.address) footerAddress.textContent = config.address;
  if (footerHours && config.openingHours) footerHours.textContent = config.openingHours;
  if (currentYearSpan) currentYearSpan.textContent = new Date().getFullYear();

  // Formatar telefone para exibição humana (ex: 5511999998888 -> (11) 99999-8888)
  if (footerPhone && config.whatsappNumber) {
    const raw = config.whatsappNumber.replace(/^55/, '');
    if (raw.length === 11) {
      footerPhone.textContent = `(${raw.slice(0, 2)}) ${raw.slice(2, 7)}-${raw.slice(7)}`;
    }
  }

  // 2. CONFIGURAR LINKS DE WHATSAPP DINAMICAMENTE
  function buildWhatsAppUrl(message) {
    return `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(message)}`;
  }

  document.querySelectorAll('.js-whatsapp-link').forEach(link => {
    const origin = link.getAttribute('data-origin') || 'geral';
    let msg = config.whatsappMessages.hero;

    if (origin === 'ambientes-cozinha') msg = config.whatsappMessages.ambientesCozinha;
    else if (origin === 'ambientes-dormitorio') msg = config.whatsappMessages.ambientesDormitorio;
    else if (origin === 'ambientes-living') msg = config.whatsappMessages.ambientesLiving;
    else if (origin === 'cta-final') msg = config.whatsappMessages.ctaFinal;
    else if (origin === 'floating-btn') msg = config.whatsappMessages.floating;
    else if (origin === 'lightbox') msg = config.whatsappMessages.galeria;

    link.setAttribute('href', buildWhatsAppUrl(msg));
  });

  // 3. HEADER SCROLL EFFECT & MENU MOBILE
  const header = document.getElementById('header');
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mobileNav = document.getElementById('mobileNav');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  if (mobileMenuToggle && mobileNav) {
    mobileMenuToggle.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      mobileMenuToggle.setAttribute('aria-expanded', isOpen);
    });

    // Fechar ao clicar em um link interno
    document.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        mobileMenuToggle.setAttribute('aria-expanded', false);
      });
    });
  }

  // 4. FILTRO DA GALERIA
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galeriaItems = document.querySelectorAll('.galeria-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filter = btn.getAttribute('data-filter');

      galeriaItems.forEach(item => {
        const itemCat = item.getAttribute('data-category');
        if (filter === 'all' || itemCat === filter) {
          item.style.display = 'block';
          item.style.animation = 'fadeIn 0.4s ease';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // 5. LIGHTBOX MODAL PARA A GALERIA
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxCategory = document.getElementById('lightboxCategory');
  const lightboxWhatsappBtn = document.getElementById('lightboxWhatsappBtn');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');

  let currentGalleryIndex = 0;
  const visibleGalleryItems = () => Array.from(galeriaItems).filter(item => item.style.display !== 'none');

  function openLightbox(index) {
    const items = visibleGalleryItems();
    if (index < 0) index = items.length - 1;
    if (index >= items.length) index = 0;
    currentGalleryIndex = index;

    const item = items[index];
    const imgSrc = item.getAttribute('data-img');
    const title = item.getAttribute('data-title');
    const cat = item.querySelector('.galeria-item-category') ? item.querySelector('.galeria-item-category').textContent : 'Ambiente';

    lightboxImage.src = imgSrc;
    lightboxImage.alt = title;
    lightboxTitle.textContent = title;
    lightboxCategory.textContent = cat;

    if (lightboxWhatsappBtn) {
      const msg = `Olá, Projetart! Gostei muito do projeto "${title}" visto na galeria e gostaria de solicitar um orçamento similar.`;
      lightboxWhatsappBtn.setAttribute('href', buildWhatsAppUrl(msg));
    }

    lightboxModal.classList.add('active');
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightboxModal.classList.remove('active');
    lightboxModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  galeriaItems.forEach((item) => {
    item.addEventListener('click', () => {
      const items = visibleGalleryItems();
      const index = items.indexOf(item);
      openLightbox(index);
    });

    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const items = visibleGalleryItems();
        const index = items.indexOf(item);
        openLightbox(index);
      }
    });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', () => openLightbox(currentGalleryIndex - 1));
  if (lightboxNext) lightboxNext.addEventListener('click', () => openLightbox(currentGalleryIndex + 1));

  // Fechar ao clicar fora do container
  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  // Teclado (ESC, setas)
  document.addEventListener('keydown', (e) => {
    if (!lightboxModal || !lightboxModal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') openLightbox(currentGalleryIndex - 1);
    if (e.key === 'ArrowRight') openLightbox(currentGalleryIndex + 1);
  });

  // 6. CARROSSEL DE DEPOIMENTOS
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  const prevTestimonialBtn = document.getElementById('prevTestimonial');
  const nextTestimonialBtn = document.getElementById('nextTestimonial');
  const carouselDots = document.querySelectorAll('#carouselDots .dot');
  let currentTestimonial = 0;
  let testimonialAutoInterval = null;

  function showTestimonial(index) {
    if (index < 0) index = testimonialCards.length - 1;
    if (index >= testimonialCards.length) index = 0;
    currentTestimonial = index;

    testimonialCards.forEach((card, i) => {
      card.classList.toggle('active', i === index);
    });

    carouselDots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  if (prevTestimonialBtn && nextTestimonialBtn) {
    prevTestimonialBtn.addEventListener('click', () => {
      showTestimonial(currentTestimonial - 1);
      resetAutoPlay();
    });

    nextTestimonialBtn.addEventListener('click', () => {
      showTestimonial(currentTestimonial + 1);
      resetAutoPlay();
    });

    carouselDots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        showTestimonial(i);
        resetAutoPlay();
      });
    });

    function startAutoPlay() {
      testimonialAutoInterval = setInterval(() => {
        showTestimonial(currentTestimonial + 1);
      }, 7000);
    }

    function resetAutoPlay() {
      clearInterval(testimonialAutoInterval);
      startAutoPlay();
    }

    startAutoPlay();
  }

  // 7. MODAL DE QUALIFICAÇÃO / BRIEFING RÁPIDO
  const briefingModal = document.getElementById('briefingModal');
  const modalClose = document.getElementById('modalClose');
  const openModalBtns = document.querySelectorAll('.js-open-modal');
  const selectorOptions = document.querySelectorAll('.selector-option');
  const leadNameInput = document.getElementById('leadName');
  const btnConfirmBriefing = document.getElementById('btnConfirmBriefing');

  let selectedEnvironment = "Cozinha Planejada";

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (briefingModal) {
        briefingModal.classList.add('active');
        briefingModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  if (modalClose && briefingModal) {
    modalClose.addEventListener('click', () => {
      briefingModal.classList.remove('active');
      briefingModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    });

    briefingModal.addEventListener('click', (e) => {
      if (e.target === briefingModal) {
        briefingModal.classList.remove('active');
        briefingModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
    });
  }

  selectorOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      selectorOptions.forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      selectedEnvironment = opt.getAttribute('data-value');
    });
  });

  if (btnConfirmBriefing) {
    btnConfirmBriefing.addEventListener('click', () => {
      const name = leadNameInput ? leadNameInput.value.trim() : '';
      let message = '';

      if (name) {
        message = `Olá! Meu nome é ${name}. Gostaria de solicitar um orçamento para o projeto de ${selectedEnvironment} com a Projetart Planejados.`;
      } else {
        message = `Olá, Projetart! Gostaria de solicitar um orçamento exclusivo para o projeto de ${selectedEnvironment}.`;
      }

      window.open(buildWhatsAppUrl(message), '_blank');
      if (briefingModal) {
        briefingModal.classList.remove('active');
        briefingModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
    });
  }
});
