const App = () => {
    // Dark theme
    const header = document.querySelector('.headet__main')
    const fullTheme = document.querySelector('.section_theme')
    const theme = document.querySelector('.section_theme__background')
    const themeCircle = document.querySelector('.section_theme__circle')
    const darkness = document.querySelectorAll('.darkness')


    
    
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

}
document.addEventListener('DOMContentLoaded', App)
