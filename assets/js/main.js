/* === Menu Show Y Hidden === */
const rsNavMenu = document.getElementById('rs-nav-menu'),
		rsNavToggle = document.getElementById('rs-nav-toggle'),
		rsNavClose = document.getElementById('rs-nav-close')

/* === Menu Show === */
/* Validate if constant exists */
if (rsNavToggle) {
	rsNavToggle.addEventListener('click', () => {
		rsNavMenu.classList.add('rs-show-menu')
	})
}

/* === Menu Hidden === */
/* Validate if constant exists */
if (rsNavClose) {
	rsNavClose.addEventListener('click', () => {
		rsNavMenu.classList.remove('rs-show-menu')
	})
}

/* === Remove Menu Mobile === */
const rsNavLink = document.querySelectorAll('.rs-nav__link')

function linkAction(){
    const rsNavMenu = document.getElementById('rs-nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    rsNavMenu.classList.remove('rs-show-menu')
}

rsNavLink.forEach(n => n.addEventListener('click', linkAction))

/* === Accordion Skills === */
const rsSkillsContent = document.getElementsByClassName('rs-skills__content'),
	rsSkillsHeader = document.querySelectorAll('.rs-skills__header')

function toggleSkills() {
	let rsItemClass = this.parentNode.className

	for (i = 0; i < rsSkillsContent.length; i++) {
		rsSkillsContent[i].className = 'rs-skills__content rs-skills__close'
	}

	if (rsItemClass === 'rs-skills__content rs-skills__close') {
		this.parentNode.className = 'rs-skills__content rs-skills__open'
	}
}

rsSkillsHeader.forEach((el) => {
	el.addEventListener('click', toggleSkills)
})

/* === Qualification Tabs === */
const rsTabs = document.querySelectorAll('[data-target]'),
	rsTabContents = document.querySelectorAll('[data-content]')

rsTabs.forEach(rsTab => {
	rsTab.addEventListener('click', () => {
		const rsTarget = document.querySelector(rsTab.dataset.target)

		rsTabContents.forEach(rsTabContent => {
			rsTabContent.classList.remove('rs-qualification__active')
		})

		rsTarget.classList.add('rs-qualification__active')

		rsTabs.forEach(rsTab => {
			rsTab.classList.remove('rs-qualification__active')
		})

		rsTab.classList.add('rs-qualification__active')
	})
})

/* === Services Modal === */
const rsModalViews = document.querySelectorAll('.rs-services__modal'),
	rsModalBtns = document.querySelectorAll('.rs-services__button'),
	rsModalCloses = document.querySelectorAll('.rs-services__modal-close')

let rsModal = function(rsModalClick) {
	rsModalViews[rsModalClick].classList.add('rs-active-modal')
}

rsModalBtns.forEach((rsModalBtn, i) => {
	rsModalBtn.addEventListener('click', () => {
		rsModal(i)
	})
})

rsModalCloses.forEach((rsModalClose) => {
	rsModalClose.addEventListener('click', () => {
		rsModalViews.forEach((rsModalView) => {
			rsModalView.classList.remove('rs-active-modal')
		})
	})
})

/* === Portfolio Swiper === */
let swiperPortfolio = new Swiper(".rs-portfolio__container", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

/* === Portfolio Testimonial === */
let swiperTestimonial = new Swiper(".rs-testimonial__container", {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true
    },
    breakpoints: {
    	568: {
    		slidesPerView: 2,
    	}
    }
});

/* === Scroll Section Active Link === */
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.rs-nav__menu a[href*=' + sectionId + ']').classList.add('rs-active-link')
        }else{
            document.querySelector('.rs-nav__menu a[href*=' + sectionId + ']').classList.remove('rs-active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

/* === Change Background Header === */
function scrollHeader(){
    const nav = document.getElementById('rs-header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('rs-scroll-header'); else nav.classList.remove('rs-scroll-header')
}

window.addEventListener('scroll', scrollHeader)

/* === Show Scroll Up === */
function scrollUp(){
    const scrollUp = document.getElementById('rs-scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('rs-show-scrollup'); else scrollUp.classList.remove('rs-show-scrollup')
}

window.addEventListener('scroll', scrollUp)

/* === Dark Light/Theme === */
const themeButton = document.getElementById('rs-theme-button')
const darkTheme = 'rs-dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})










