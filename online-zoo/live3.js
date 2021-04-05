const App = () => {
    // Dark theme
    const header = document.querySelector('.headet__main')
    const fullTheme = document.querySelector('.section_theme')
    const theme = document.querySelector('.section_theme__background')
    const themeCircle = document.querySelector('.section_theme__circle')
    const darkness = document.querySelectorAll('.darkness')
    const arrow1 = document.querySelector('.arrw_slid1')
    const arrow2 = document.querySelector('.arrw_slid2')
    const item1 = document.querySelector('.item1')
    const item2 = document.querySelector('.item2')
    const item3 = document.querySelector('.item3')
    const item4 = document.querySelector('.item4')


    
    
    // Dark theme state
    const state = {
        flag: false,
        dayNight: 'day',
        counter: 3,
    }

    let { flag, dayNight, counter } = state
    // dark theme work

    fullTheme.addEventListener('click', (e) => {
        if (flag === false && dayNight === 'day') {
            flag = true
            dayNight = 'night'
            theme.classList.add('active__theme')
            themeCircle.classList.add('active__circle')
            header.classList.add('active-night')
            darkness.forEach(item => {
                item.classList.add('dark__dark')
            })
            
        } else if (flag === true && dayNight === 'night') {
            dayNight = 'day'
            flag = false
            theme.classList.remove('active__theme')
            themeCircle.classList.remove('active__circle')
            header.classList.remove('active-night')
            darkness.forEach(item => {
                item.classList.remove('dark__dark')
            })
        }
    })
    arrow1.addEventListener('click', (e) => {
        if (counter == 1) {
            counter += 0
        } else {
            counter -= 1
        }
        if (counter == 1) {
            item1.classList.add('active__item')
            item2.classList.remove('active__item')
        } else if (counter == 2) {
            item1.classList.remove('active__item')
            item2.classList.add('active__item')
            item3.classList.remove('active__item')
        } else if (counter == 3) {
            item2.classList.remove('active__item')
            item3.classList.add('active__item')
            item4.classList.remove('active__item')
        } else if (counter == 4) {
            item3.classList.remove('active__item')
            item4.classList.add('active__item')
        }
    })
    arrow2.addEventListener('click', (e) => {
        if (counter == 4) {
            counter += 0
        } else {
            counter +=1
        }
        if (counter == 1) {
            item1.classList.add('active__item')
            item2.classList.remove('active__item')
        } else if (counter == 2) {
            item1.classList.remove('active__item')
            item2.classList.add('active__item')
            item3.classList.remove('active__item')
        } else if (counter == 3) {
            item2.classList.remove('active__item')
            item3.classList.add('active__item')
            item4.classList.remove('active__item')
        } else if (counter == 4) {
            item3.classList.remove('active__item')
            item4.classList.add('active__item')
        }
    })
    item1.addEventListener('click', (e) => {
        item1.classList.add('active__item')
        item2.classList.remove('active__item')
        item3.classList.remove('active__item')
        item4.classList.remove('active__item')
        counter = 1
    })
    item2.addEventListener('click', (e) => {
        item1.classList.remove('active__item')
        item2.classList.add('active__item')
        item3.classList.remove('active__item')
        item4.classList.remove('active__item')
        counter = 2
    })
    item3.addEventListener('click', (e) => {
        item1.classList.remove('active__item')
        item2.classList.remove('active__item')
        item3.classList.add('active__item')
        item4.classList.remove('active__item')
        counter = 3
    })
    item4.addEventListener('click', (e) => {
        item1.classList.remove('active__item')
        item2.classList.remove('active__item')
        item3.classList.remove('active__item')
        item4.classList.add('active__item')
        counter = 4
    })

}
document.addEventListener('DOMContentLoaded', App)
