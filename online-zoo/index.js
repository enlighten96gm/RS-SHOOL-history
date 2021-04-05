const App = () => {
    // Dark theme
    const header = document.querySelector('.headet__main')
    const headerFull = document.querySelector('.header__allin')
    const darkness = document.querySelectorAll('.darkness')
    const fullTheme = document.querySelector('.section_theme')
    const theme = document.querySelector('.section_theme__background')
    const themeCircle = document.querySelector('.section_theme__circle')
    const howWorks1 = document.querySelector('.how-works__container1')
    const howWorks2 = document.querySelector('.how-works__container2')
    const zooPets = document.querySelector('.zoo-pets')
    const paySection = document.querySelector('.pay-section')
    const testimonial = document.querySelector('.testimonials-section')
    const testimonialItem1 = document.querySelector('.testimonials-section__slider-item1')
    const testimonialItem2 = document.querySelector('.testimonials-section__slider-item2')
    const sectionMap = document.querySelector('.section-map')
    const sectionMapBlack = document.querySelector('.section-map__planet')
    const card1 = document.querySelector('.card__map1')
    const card2 = document.querySelector('.card__map2')
    const card3 = document.querySelector('.card__map3')
    const card4 = document.querySelector('.card__map4')
    
    
    // Dark theme state
    const state = {
        flag: false,
        dayNight: 'day'
    }

    let { flag, dayNight } = state
    // dark theme work

    fullTheme.addEventListener('click', (e) => {
        if (flag === false && dayNight === 'day') {
            flag = true
            dayNight = 'night'
            theme.classList.add('active__theme')
            themeCircle.classList.add('active__circle')
            header.classList.add('active-night')
            headerFull.classList.add('active-night')
            howWorks1.classList.add('super__dark')
            howWorks2.classList.add('slight__dark')
            zooPets.classList.add('super__dark')
            paySection.classList.add('slight__dark')
            testimonial.classList.add('super__dark')
            testimonialItem1.classList.add('slight__dark')
            testimonialItem2.classList.add('slight__dark')
            sectionMap.classList.add('slight__dark')
            sectionMapBlack.classList.add('map__black')
            card1.classList.add('super__dark')
            card2.classList.add('super__dark')
            card3.classList.add('super__dark')
            card4.classList.add('super__dark')
            darkness.forEach(item => {
                item.classList.add('dark__dark')
            })
            
            
        } else if (flag === true && dayNight === 'night') {
            dayNight = 'day'
            flag = false
            theme.classList.remove('active__theme')
            themeCircle.classList.remove('active__circle')
            header.classList.remove('active-night')
            headerFull.classList.remove('active-night')
            howWorks1.classList.remove('super__dark')
            howWorks2.classList.remove('slight__dark')
            zooPets.classList.remove('super__dark')
            paySection.classList.remove('slight__dark')
            testimonial.classList.remove('super__dark')
            testimonialItem1.classList.remove('slight__dark')
            testimonialItem2.classList.remove('slight__dark')
            sectionMap.classList.remove('slight__dark')
            sectionMapBlack.classList.remove('map__black')
            card1.classList.remove('super__dark')
            card2.classList.remove('super__dark')
            card3.classList.remove('super__dark')
            card4.classList.remove('super__dark')
            darkness.forEach(item => {
                item.classList.remove('dark__dark')
            })
            
        }
    })

}
document.addEventListener('DOMContentLoaded', App)
