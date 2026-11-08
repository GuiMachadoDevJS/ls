document.addEventListener('DOMContentLoaded', () => {
  // 1. Menu Mobile
  const menuBtn = document.getElementById('mobile-menu-btn')
  const mobileMenu = document.getElementById('mobile-menu')
  const iconBars = document.getElementById('menu-icon-bars')
  const iconClose = document.getElementById('menu-icon-close')
  const mobileLinks = document.querySelectorAll('.mobile-nav-link')

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('menu-open')
      if (isOpen) {
        mobileMenu.classList.remove('menu-open')
        mobileMenu.classList.add('menu-closed')
        iconBars.classList.remove('hidden')
        iconClose.classList.add('hidden')
        menuBtn.setAttribute('aria-expanded', 'false')
      } else {
        mobileMenu.classList.remove('menu-closed')
        mobileMenu.classList.add('menu-open')
        iconBars.classList.add('hidden')
        iconClose.classList.remove('hidden')
        menuBtn.setAttribute('aria-expanded', 'true')
      }
    })

    // Fechar ao clicar em qualquer link
    mobileLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('menu-open')
        mobileMenu.classList.add('menu-closed')
        iconBars.classList.remove('hidden')
        iconClose.classList.add('hidden')
        menuBtn.setAttribute('aria-expanded', 'false')
      })
    })
  }

  // 2. Botão Voltar ao Topo (Mobile / Geral)
  const scrollTopBtn = document.getElementById('scroll-to-top')
  if (scrollTopBtn) {
    const handleScroll = () => {
      if (window.scrollY > 280) {
        scrollTopBtn.classList.remove('hidden-btn')
        scrollTopBtn.classList.add('visible')
      } else {
        scrollTopBtn.classList.remove('visible')
        scrollTopBtn.classList.add('hidden-btn')
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    })
  }

  // 3. Highlight de Link Ativo no Header
  const sections = document.querySelectorAll('section[id], footer[id]')
  const navLinks = document.querySelectorAll('.nav-link')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id')
          navLinks.forEach((link) => {
            const href = link.getAttribute('href')
            if (href === `#${currentId}`) {
              link.classList.add('text-gold')
              link.classList.remove('text-slate-200')
            } else {
              link.classList.remove('text-gold')
              link.classList.add('text-slate-200')
            }
          })
        }
      })
    },
    { rootMargin: '-40% 0px -50% 0px' },
  )

  sections.forEach((sec) => observer.observe(sec))

  // 4. Ano Atual no Rodapé
  const yearSpan = document.getElementById('current-year')
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear()
  }
})
