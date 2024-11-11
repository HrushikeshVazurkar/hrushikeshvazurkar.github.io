// Import styles
import './style.css'

// Initialize typing animation
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault()
            const targetId = this.getAttribute('href')
            const targetSection = document.querySelector(targetId)
            targetSection.scrollIntoView({ behavior: 'smooth' })
        })
    })

    // Optional: Add scroll-based active state for nav items
    const sections = document.querySelectorAll('.section')
    const navLinks = document.querySelectorAll('nav a')

    window.addEventListener('scroll', () => {
        let current = ''
        sections.forEach(section => {
            const sectionTop = section.offsetTop
            const sectionHeight = section.clientHeight
            if (scrollY >= sectionTop - 100) {
                current = section.getAttribute('id')
            }
        })

        navLinks.forEach(link => {
            link.classList.remove('active')
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active')
            }
        })
    })
})