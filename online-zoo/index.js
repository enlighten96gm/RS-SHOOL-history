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
    // Sliders
    // Deer Slider
    const deerSlider = document.querySelector('.how-works__slider_item')
    const insideSliderDeer = document.querySelector('.how-works__slider_item1').clientWidth
    const deerSliderInput = document.querySelector('.how-works__slider_input')
    const deerSliderNumber = document.querySelector('.how-works__slider_number1')
    // Pets in zoo slider
    const idiotSlider = document.querySelector('.idiot-class')
    const insideIdiotSlider = document.querySelector('.zoo-pets__slider-img1').clientWidth
    console.log(insideIdiotSlider);
    const idiotSliderInput = document.querySelector('.zoo-pets__inside')
    const idiotSliderNumber = document.querySelector('.zoo-pets__number1')
    const idiotButtonLeft = document.querySelector('.zoo-pets__slider-button1')
    const idiotButtonRight = document.querySelector('.zoo-pets__slider-button2')
    const coverPls = document.querySelectorAll('.zoo-pets__slider-img1 .cover__pls')
    const coverPlsText = document.querySelectorAll('.zoo-pets__slider-img1 .inside_slide_block')
    const coverPls1 = document.querySelectorAll('.zoo-pets__slider-img2 .cover__pls')
    const coverPlsText1 = document.querySelectorAll('.zoo-pets__slider-img2 .inside_slide_block')
    const coverPls2 = document.querySelectorAll('.zoo-pets__slider-img3 .cover__pls')
    const coverPlsText2 = document.querySelectorAll('.zoo-pets__slider-img3 .inside_slide_block')
    const coverPls3 = document.querySelectorAll('.zoo-pets__slider-img4 .cover__pls')
    const coverPlsText3 = document.querySelectorAll('.zoo-pets__slider-img4 .inside_slide_block')
    let counter = 1
    // Testimonials slider
    const superIdiot = document.querySelector('.super-idiot')
    const insideSuperIdiot = document.querySelector('.testimonials-section__slider-item1').clientWidth
    const superIdiotInput = document.querySelector('.testimonials-section__slider-input_range')
    const superIdiotNumber = document.querySelector('.testimonials-section__number1')
    const superButtonLeft = document.querySelector('.testimonials-section__slider-button1')
    const superButtonRight = document.querySelector('.testimonials-section__slider-button2')
    let number = 1
    // First slider
    const firstSlider = document.querySelector('.slider1__idiot')
    const firstSliderInside = document.querySelector('.slider1-item_eagle').clientWidth
    const firstSLiderInput = document.querySelector('.slider1__input_range')
    const firstSliderNumber = document.querySelector('.slider1__input_number1')
    const whatToDisplay = document.querySelectorAll('.inside_slide_2')
    const solomaElement = document.querySelectorAll('.soloma')

    let sobachka = 2
    let startValue = 262
    let myLocalStorage = window.localStorage

    
    // Dark theme state
    const state = {
        flag: false,
        dayNight: false,
        value: 1,
        min: 1,
        max: 4,

    }

    let { flag, dayNight, value, min, max } = state

    


    // dark theme work


    let setDarkTheme = (darkTheme) => {
        if (darkTheme == 'false' || !darkTheme) {
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
        } else if (darkTheme == 'true') {
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
    }
    setDarkTheme(myLocalStorage.getItem('darkTheme'))

    let setEverythingDark = () => {
        
        if (myLocalStorage.getItem('darkTheme') == 'true') {
            myLocalStorage.setItem('darkTheme', false)
            setDarkTheme(myLocalStorage.getItem('darkTheme'))
            console.log(myLocalStorage);
          } else if (myLocalStorage.getItem('darkTheme') == 'false' || !myLocalStorage.getItem('darkTheme')) {
            console.log('kek2');
            myLocalStorage.setItem('darkTheme', true)
            setDarkTheme(myLocalStorage.getItem('darkTheme'))
            console.log(myLocalStorage);
          }
    }

    fullTheme.addEventListener('click', setEverythingDark) 

    // Slider mechanicks
    // Deer Slider
    deerSliderInput.addEventListener('input', (e) => {
        if (e.target.value === '1') {
            deerSliderNumber.innerHTML = '01/'
            deerSlider.style.left = '0px'
        } else if (e.target.value === '2') {
            deerSliderNumber.innerHTML = '02/'
            deerSlider.style.transition = '1s'
            deerSlider.style.left = `-${insideSliderDeer + 5}px`
        } else if (e.target.value === '3') {
            deerSliderNumber.innerHTML = '03/'
            deerSlider.style.transition = '1s'
            deerSlider.style.left = `-${insideSliderDeer * 2 + 10}px`
        } else if (e.target.value === '4') {
            deerSliderNumber.innerHTML = '04/'
            deerSlider.style.transition = '1s'
            deerSlider.style.left = `-${insideSliderDeer * 3 + 15}px`
        }
    })
    // PEts in zoo slider
    coverPls[0].style.opacity = '0.3'
    coverPls[0].style.backgroundColor = '#000'
    coverPlsText[0].style.bottom = '120px'
    idiotSliderInput.addEventListener('input', (e) => {
        value = Number(e.target.value)
        if (e.target.value === '1') {
            counter = Number(e.target.value)
            if (value > max) {
                min++
                max++
                idiotSlider.style.left = `-${insideIdiotSlider * 4 + 120}px`
            } else if (value < min) {
                min--
                max--
                idiotSlider.style.left = `-${insideIdiotSlider * 0 + 0}px`
            }
            coverPls[0].style.opacity = '0.3'
            coverPls[0].style.backgroundColor = '#000'
            coverPlsText[0].style.bottom = '120px'
            coverPls1[0].style.opacity = '0'
            coverPls1[0].style.backgroundColor = '#000'
            coverPlsText1[0].style.bottom = '0px'
            idiotSlider.style.transition = '0.5s'
            idiotSliderNumber.innerHTML = '01/'
        } else if (e.target.value === '2') {
            counter = Number(e.target.value)
            if (value > max) {
                min++
                max++
                idiotSlider.style.left = `-${insideIdiotSlider * 3 + 90}px`
            } else if (value < min) {
                min--
                max--
                idiotSlider.style.left = `-${insideIdiotSlider * 1 + 30}px`
            }
            coverPls[0].style.opacity = '0'
            coverPlsText[0].style.bottom = '0px'
            coverPls1[0].style.opacity = '0.3'
            coverPls1[0].style.backgroundColor = '#000'
            coverPlsText1[0].style.bottom = '120px'
            coverPls2[0].style.opacity = '0'
            coverPlsText2[0].style.bottom = '0px'
            idiotSlider.style.transition = '0.5s'
            idiotSliderNumber.innerHTML = '02/'
        } else if (e.target.value === '3') {
            counter = Number(e.target.value)
            if (value > max) {
                min++
                max++
                idiotSlider.style.left = `-${insideIdiotSlider * 2 + 60}px`
            } else if (value < min) {
                min--
                max--
                idiotSlider.style.left = `-${insideIdiotSlider * 2 + 60}px`
            }
            coverPls1[0].style.opacity = '0'
            coverPls1[0].style.backgroundColor = '#000'
            coverPlsText1[0].style.bottom = '0px'
            coverPls2[0].style.opacity = '0.3'
            coverPls2[0].style.backgroundColor = '#000'
            coverPlsText2[0].style.bottom = '120px'
            coverPls3[0].style.opacity = '0'
            coverPls3[0].style.backgroundColor = '#000'
            coverPlsText3[0].style.bottom = '0px'
            idiotSlider.style.transition = '0.5s'
            idiotSliderNumber.innerHTML = '03/'
        } else if (e.target.value === '4') {
            counter = Number(e.target.value)
            if (value > max) {
                min++
                max++
                idiotSlider.style.left = `-${insideIdiotSlider * 0 + 0}px`
            } else if (value < min) {
                min--
                max--
                idiotSlider.style.left = `-${insideIdiotSlider * 3 + 90}px`
            }
            coverPls3[0].style.opacity = '0.3'
            coverPls3[0].style.backgroundColor = '#000'
            coverPlsText3[0].style.bottom = '120px'
            coverPls2[0].style.opacity = '0'
            coverPls2[0].style.backgroundColor = '#000'
            coverPlsText2[0].style.bottom = '0px'
            coverPls[1].style.opacity = '0'
            coverPls[1].style.backgroundColor = '#000'
            coverPlsText[1].style.bottom = '0px'
            idiotSlider.style.transition = '0.5s'
            idiotSliderNumber.innerHTML = '04/'
        } else if (e.target.value === '5') {
            counter = Number(e.target.value)
            if (value > max) {
                min++
                max++
                idiotSlider.style.left = `-${insideIdiotSlider * 1 + 30}px`
            } else if (value < min) {
                min--
                max--
                idiotSlider.style.left = `-${insideIdiotSlider * 0 + 0}px`
            }
            coverPls[1].style.opacity = '0.3'
            coverPls[1].style.backgroundColor = '#000'
            coverPlsText[1].style.bottom = '120px'
            coverPls3[0].style.opacity = '0'
            coverPls3[0].style.backgroundColor = '#000'
            coverPlsText3[0].style.bottom = '0px'
            coverPls1[1].style.opacity = '0'
            coverPls1[1].style.backgroundColor = '#000'
            coverPlsText1[1].style.bottom = '0px'
            idiotSlider.style.transition = '0.5s'
            idiotSliderNumber.innerHTML = '05/'
            
        } else if (e.target.value === '6') {
            counter = Number(e.target.value)
            if (value > max) {
                min++
                max++
                idiotSlider.style.left = `-${insideIdiotSlider * 2 + 60}px`
            } else if (value < min) {
                min--
                max--
                idiotSlider.style.left = `-${insideIdiotSlider * 1 + 30}px`
            }
            coverPls[1].style.opacity = '0'
            coverPls[1].style.backgroundColor = '#000'
            coverPlsText[1].style.bottom = '0px'
            coverPls1[1].style.opacity = '0.3'
            coverPls1[1].style.backgroundColor = '#000'
            coverPlsText1[1].style.bottom = '120px'
            coverPls2[1].style.opacity = '0'
            coverPls2[1].style.backgroundColor = '#000'
            coverPlsText2[1].style.bottom = '0px'
            idiotSlider.style.transition = '0.5s'
            idiotSliderNumber.innerHTML = '06/'
        } else if (e.target.value === '7') {
            counter = Number(e.target.value)
            if (value > max) {
                min++
                max++
                idiotSlider.style.left = `-${insideIdiotSlider * 3 + 90}px`
            } else if (value < min) {
                min--
                max--
                idiotSlider.style.left = `-${insideIdiotSlider * 2 + 60}px`
            }
            coverPls2[1].style.opacity = '0.3'
            coverPls2[1].style.backgroundColor = '#000'
            coverPlsText2[1].style.bottom = '120px'
            coverPls1[1].style.opacity = '0'
            coverPls1[1].style.backgroundColor = '#000'
            coverPlsText1[1].style.bottom = '0px'
            coverPls3[1].style.opacity = '0'
            coverPls3[1].style.backgroundColor = '#000'
            coverPlsText3[1].style.bottom = '0px'
            idiotSlider.style.transition = '0.5s'
            idiotSliderNumber.innerHTML = '07/'
        } else if (e.target.value === '8') {
            counter = Number(e.target.value)
            if (value > max) {
                min++
                max++
                idiotSlider.style.left = `-${insideIdiotSlider * 4 + 120}px`
            } else if (value < min) {
                min--
                max--
                idiotSlider.style.left = `-${insideIdiotSlider * 3 + 90}px`
            }
            coverPls2[1].style.opacity = '0'
            coverPls2[1].style.backgroundColor = '#000'
            coverPlsText2[1].style.bottom = '0px'
            coverPls3[1].style.opacity = '0.3'
            coverPls3[1].style.backgroundColor = '#000'
            coverPlsText3[1].style.bottom = '120px'
            idiotSlider.style.transition = '0.5s'
            idiotSliderNumber.innerHTML = '08/'
        }
    })



    idiotSlider.style.transition = '0.5s'
    idiotButtonLeft.addEventListener('click', (e) => {
        counter--
        if (counter === 0) { 
            counter = 8
            max = 8
            min = 5
            idiotSliderInput.value = 8
            idiotSliderNumber.innerHTML = `08/`
            coverPls2[1].style.opacity = '0'
                coverPls2[1].style.backgroundColor = '#000'
                coverPlsText2[1].style.bottom = '0px'
                coverPls3[1].style.opacity = '0.3'
                coverPls3[1].style.backgroundColor = '#000'
                coverPlsText3[1].style.bottom = '120px'
            idiotSlider.style.left = `-${insideIdiotSlider * 4 + 120}px`
         } 
        else {
            idiotSliderInput.value = counter
            idiotSliderNumber.innerHTML = `0${counter}/`
            
            if (counter === 1) {
                if (counter > max) {
                    min++
                    max++
                    idiotSlider.style.left = `-${insideIdiotSlider * 4 + 120}px`
                } else if (counter < min) {
                    min--
                    max--
                    idiotSlider.style.left = `-${insideIdiotSlider * 0 + 0}px`
                }
                coverPls[0].style.opacity = '0.3'
                coverPls[0].style.backgroundColor = '#000'
                coverPlsText[0].style.bottom = '120px'
                coverPls1[0].style.opacity = '0'
                coverPls1[0].style.backgroundColor = '#000'
                coverPlsText1[0].style.bottom = '0px'
            } else if (counter === 2) {
                if (counter > max) {
                    min++
                    max++
                    idiotSlider.style.left = `-${insideIdiotSlider * 3 + 90}px`
                } else if (counter < min) {
                    min--
                    max--
                    idiotSlider.style.left = `-${insideIdiotSlider * 1 + 30}px`
                }
                coverPls[0].style.opacity = '0'
                coverPlsText[0].style.bottom = '0px'
                coverPls1[0].style.opacity = '0.3'
                coverPls1[0].style.backgroundColor = '#000'
                coverPlsText1[0].style.bottom = '120px'
                coverPls2[0].style.opacity = '0'
                coverPlsText2[0].style.bottom = '0px'
            } else if (counter === 3) {
                if (counter > max) {
                    min++
                    max++
                    idiotSlider.style.left = `-${insideIdiotSlider * 2 + 60}px`
                } else if (counter < min) {
                    min--
                    max--
                    idiotSlider.style.left = `-${insideIdiotSlider * 2 + 60}px`
                }
                coverPls1[0].style.opacity = '0'
                coverPls1[0].style.backgroundColor = '#000'
                coverPlsText1[0].style.bottom = '0px'
                coverPls2[0].style.opacity = '0.3'
                coverPls2[0].style.backgroundColor = '#000'
                coverPlsText2[0].style.bottom = '120px'
                coverPls3[0].style.opacity = '0'
                coverPls3[0].style.backgroundColor = '#000'
                coverPlsText3[0].style.bottom = '0px'
            } else if (counter === 4) {
                if (counter > max) {
                    min++
                    max++
                    idiotSlider.style.left = `-${insideIdiotSlider * 0 + 0}px`
                } else if (counter < min) {
                    min--
                    max--
                    idiotSlider.style.left = `-${insideIdiotSlider * 3 + 90}px`
                }
                coverPls3[0].style.opacity = '0.3'
                coverPls3[0].style.backgroundColor = '#000'
                coverPlsText3[0].style.bottom = '120px'
                coverPls2[0].style.opacity = '0'
                coverPls2[0].style.backgroundColor = '#000'
                coverPlsText2[0].style.bottom = '0px'
                coverPls[1].style.opacity = '0'
                coverPls[1].style.backgroundColor = '#000'
                coverPlsText[1].style.bottom = '0px'
            } else if (counter === 5) {
                if (counter > max) {
                    min++
                    max++
                    idiotSlider.style.left = `-${insideIdiotSlider * 1 + 30}px`
                } else if (counter < min) {
                    min--
                    max--
                    idiotSlider.style.left = `-${insideIdiotSlider * 0 + 0}px`
                }
                coverPls[1].style.opacity = '0.3'
                coverPls[1].style.backgroundColor = '#000'
                coverPlsText[1].style.bottom = '120px'
                coverPls3[0].style.opacity = '0'
                coverPls3[0].style.backgroundColor = '#000'
                coverPlsText3[0].style.bottom = '0px'
                coverPls1[1].style.opacity = '0'
                coverPls1[1].style.backgroundColor = '#000'
                coverPlsText1[1].style.bottom = '0px'
            } else if (counter === 6) {
                if (counter > max) {
                    min++
                    max++
                    idiotSlider.style.left = `-${insideIdiotSlider * 2 + 60}px`
                } else if (counter < min) {
                    min--
                    max--
                    idiotSlider.style.left = `-${insideIdiotSlider * 1 + 30}px`
                }
                coverPls[1].style.opacity = '0'
                coverPls[1].style.backgroundColor = '#000'
                coverPlsText[1].style.bottom = '0px'
                coverPls1[1].style.opacity = '0.3'
                coverPls1[1].style.backgroundColor = '#000'
                coverPlsText1[1].style.bottom = '120px'
                coverPls2[1].style.opacity = '0'
                coverPls2[1].style.backgroundColor = '#000'
                coverPlsText2[1].style.bottom = '0px'
            } else if (counter === 7) {
                if (counter > max) {
                    min++
                    max++
                    idiotSlider.style.left = `-${insideIdiotSlider * 3 + 90}px`
                } else if (counter < min) {
                    min--
                    max--
                    idiotSlider.style.left = `-${insideIdiotSlider * 2 + 60}px`
                }
                coverPls2[1].style.opacity = '0.3'
                coverPls2[1].style.backgroundColor = '#000'
                coverPlsText2[1].style.bottom = '120px'
                coverPls1[1].style.opacity = '0'
                coverPls1[1].style.backgroundColor = '#000'
                coverPlsText1[1].style.bottom = '0px'
                coverPls3[1].style.opacity = '0'
                coverPls3[1].style.backgroundColor = '#000'
                coverPlsText3[1].style.bottom = '0px'
            } else if (counter === 8) {
                if (counter > max) {
                    min++
                    max++
                    idiotSlider.style.left = `-${insideIdiotSlider * 4 + 120}px`
                } else if (counter < min) {
                    min--
                    max--
                    idiotSlider.style.left = `-${insideIdiotSlider * 3 + 90}px`
                }
                
                coverPls2[1].style.opacity = '0'
                coverPls2[1].style.backgroundColor = '#000'
                coverPlsText2[1].style.bottom = '0px'
                coverPls3[1].style.opacity = '0.3'
                coverPls3[1].style.backgroundColor = '#000'
                coverPlsText3[1].style.bottom = '120px'
            }
        } 
    })



    idiotButtonRight.addEventListener('click', (e) => {
        counter++
        if (counter === 9) { 
            counter = 1
            max = 4
            min = 1
            coverPls[0].style.opacity = '0.3'
                coverPls[0].style.backgroundColor = '#000'
                coverPlsText[0].style.bottom = '120px'
                coverPls1[0].style.opacity = '0'
                coverPls1[0].style.backgroundColor = '#000'
                coverPlsText1[0].style.bottom = '0px'
            if (counter === 1) {
                idiotSlider.style.left = `0px`
            }
            idiotSliderInput.value = 1
            idiotSliderNumber.innerHTML = `01/`
         } 
        else {
            idiotSliderInput.value = counter
            idiotSliderNumber.innerHTML = `0${counter}/`
            if (counter === 1) {
                if (counter > max) {
                    min++
                    max++
                    idiotSlider.style.left = `-${insideIdiotSlider * 4 + 120}px`
                } else if (counter < min) {
                    min--
                    max--
                    idiotSlider.style.left = `-${insideIdiotSlider * 0 + 0}px`
                }
                coverPls[0].style.opacity = '0.3'
                coverPls[0].style.backgroundColor = '#000'
                coverPlsText[0].style.bottom = '120px'
                coverPls1[0].style.opacity = '0'
                coverPls1[0].style.backgroundColor = '#000'
                coverPlsText1[0].style.bottom = '0px'
            } else if (counter === 2) {
                if (counter > max) {
                    min++
                    max++
                    idiotSlider.style.left = `-${insideIdiotSlider * 3 + 90}px`
                } else if (counter < min) {
                    min--
                    max--
                    idiotSlider.style.left = `-${insideIdiotSlider * 1 + 30}px`
                }
                coverPls[0].style.opacity = '0'
                coverPlsText[0].style.bottom = '0px'
                coverPls1[0].style.opacity = '0.3'
                coverPls1[0].style.backgroundColor = '#000'
                coverPlsText1[0].style.bottom = '120px'
                coverPls2[0].style.opacity = '0'
                coverPlsText2[0].style.bottom = '0px'
            } else if (counter === 3) {
                if (counter > max) {
                    min++
                    max++
                    idiotSlider.style.left = `-${insideIdiotSlider * 2 + 60}px`
                } else if (counter < min) {
                    min--
                    max--
                    idiotSlider.style.left = `-${insideIdiotSlider * 2 + 60}px`
                }
                coverPls1[0].style.opacity = '0'
                coverPls1[0].style.backgroundColor = '#000'
                coverPlsText1[0].style.bottom = '0px'
                coverPls2[0].style.opacity = '0.3'
                coverPls2[0].style.backgroundColor = '#000'
                coverPlsText2[0].style.bottom = '120px'
                coverPls3[0].style.opacity = '0'
                coverPls3[0].style.backgroundColor = '#000'
                coverPlsText3[0].style.bottom = '0px'
            } else if (counter === 4) {
                if (counter > max) {
                    min++
                    max++
                    idiotSlider.style.left = `-${insideIdiotSlider * 0 + 0}px`
                } else if (counter < min) {
                    min--
                    max--
                    idiotSlider.style.left = `-${insideIdiotSlider * 3 + 90}px`
                }
                coverPls3[0].style.opacity = '0.3'
                coverPls3[0].style.backgroundColor = '#000'
                coverPlsText3[0].style.bottom = '120px'
                coverPls2[0].style.opacity = '0'
                coverPls2[0].style.backgroundColor = '#000'
                coverPlsText2[0].style.bottom = '0px'
                coverPls[1].style.opacity = '0'
                coverPls[1].style.backgroundColor = '#000'
                coverPlsText[1].style.bottom = '0px'
            } else if (counter === 5) {
                if (counter > max) {
                    min++
                    max++
                    idiotSlider.style.left = `-${insideIdiotSlider * 1 + 30}px`
                } else if (counter < min) {
                    min--
                    max--
                    idiotSlider.style.left = `-${insideIdiotSlider * 0 + 0}px`
                }
                coverPls[1].style.opacity = '0.3'
                coverPls[1].style.backgroundColor = '#000'
                coverPlsText[1].style.bottom = '120px'
                coverPls3[0].style.opacity = '0'
                coverPls3[0].style.backgroundColor = '#000'
                coverPlsText3[0].style.bottom = '0px'
                coverPls1[1].style.opacity = '0'
                coverPls1[1].style.backgroundColor = '#000'
                coverPlsText1[1].style.bottom = '0px'
            } else if (counter === 6) {
                if (counter > max) {
                    min++
                    max++
                    idiotSlider.style.left = `-${insideIdiotSlider * 2 + 60}px`
                } else if (counter < min) {
                    min--
                    max--
                    idiotSlider.style.left = `-${insideIdiotSlider * 1 + 30}px`
                }
                coverPls[1].style.opacity = '0'
                coverPls[1].style.backgroundColor = '#000'
                coverPlsText[1].style.bottom = '0px'
                coverPls1[1].style.opacity = '0.3'
                coverPls1[1].style.backgroundColor = '#000'
                coverPlsText1[1].style.bottom = '120px'
                coverPls2[1].style.opacity = '0'
                coverPls2[1].style.backgroundColor = '#000'
                coverPlsText2[1].style.bottom = '0px'
            } else if (counter === 7) {
                if (counter > max) {
                    min++
                    max++
                    idiotSlider.style.left = `-${insideIdiotSlider * 3 + 90}px`
                } else if (counter < min) {
                    min--
                    max--
                    idiotSlider.style.left = `-${insideIdiotSlider * 2 + 60}px`
                }
                coverPls2[1].style.opacity = '0.3'
                coverPls2[1].style.backgroundColor = '#000'
                coverPlsText2[1].style.bottom = '120px'
                coverPls1[1].style.opacity = '0'
                coverPls1[1].style.backgroundColor = '#000'
                coverPlsText1[1].style.bottom = '0px'
                coverPls3[1].style.opacity = '0'
                coverPls3[1].style.backgroundColor = '#000'
                coverPlsText3[1].style.bottom = '0px'
            } else if (counter === 8) {
                if (counter > max) {
                    min++
                    max++
                    idiotSlider.style.left = `-${insideIdiotSlider * 4 + 120}px`
                } else if (counter < min) {
                    min--
                    max--
                    idiotSlider.style.left = `-${insideIdiotSlider * 3 + 90}px`
                }
                coverPls2[1].style.opacity = '0'
                coverPls2[1].style.backgroundColor = '#000'
                coverPlsText2[1].style.bottom = '0px'
                coverPls3[1].style.opacity = '0.3'
                coverPls3[1].style.backgroundColor = '#000'
                coverPlsText3[1].style.bottom = '120px'
            }
        }
    })
    // 
    // 
// 
// 
// 
// 
    // 
    // Testimonials slider
    superIdiotInput.addEventListener('input', (e) => {
        number = e.target.value
        superIdiot.style.transition = `1s`
        superIdiotNumber.innerHTML = `0${number}/`
        superIdiot.style.left = `-${e.target.value * insideSuperIdiot + (number * 40)}px`
    })
    superButtonLeft.addEventListener('click', (e) => {
        superIdiot.style.transition = `1s`
        if (number === 1) { return }
        else {
            number--
            superIdiotInput.value = number
            superIdiotNumber.innerHTML = `0${number}/`
            superIdiot.style.left = `-${insideSuperIdiot * number + (40 * number)}px`
        }
    })
    superButtonRight.addEventListener('click', (e) => {
        superIdiot.style.transition = `1s`
        if (number === 8) { return }
        else {
            number++
            superIdiotInput.value = number
            superIdiotNumber.innerHTML = `0${number}/`
            superIdiot.style.left = `-${insideSuperIdiot * number + (40 * number)}px`
        }
    })
    // First slider
    solomaElement[0].addEventListener('click', (e) => {
        whatToDisplay.forEach(item => item.classList.remove('display_active'))
        solomaElement.forEach(item => item.classList.remove('active-panda_or__not'))
        whatToDisplay[0].classList.add('display_active')
        solomaElement[0].classList.add('active-panda_or__not')
        firstSliderNumber.innerHTML = `01/`
        if (window.screen.width <= 1940 && window.screen.width >= 1201) {
            firstSlider.style.left = `${startValue + firstSliderInside + 45}px`
        } else {
            startValue = 367
            firstSlider.style.left = `${startValue + firstSliderInside + 30 - 20 + 25}px`
        }

        firstSLiderInput.value = 1
    })
    console.log(window.screen.width);
    solomaElement[1].addEventListener('click', (e) => {
        whatToDisplay.forEach(item => item.classList.remove('display_active'))
        solomaElement.forEach(item => item.classList.remove('active-panda_or__not'))
        whatToDisplay[1].classList.add('display_active')
        solomaElement[1].classList.add('active-panda_or__not')
        if (window.screen.width <= 1940 && window.screen.width >= 1201) {
            firstSlider.style.left = `${startValue}px`
        } else {
            startValue = 367
            firstSlider.style.left = `${startValue}px`
        }
        firstSliderNumber.innerHTML = `02/`

        firstSLiderInput.value = 2
    })
    solomaElement[2].addEventListener('click', (e) => {
        whatToDisplay.forEach(item => item.classList.remove('display_active'))
        solomaElement.forEach(item => item.classList.remove('active-panda_or__not'))
        whatToDisplay[2].classList.add('display_active')
        solomaElement[2].classList.add('active-panda_or__not')
        if (window.screen.width <= 1940 && window.screen.width >= 1201) {
            firstSlider.style.left = `${startValue - firstSliderInside - 45}px`

        } else {
            startValue = 367
            firstSlider.style.left = `${startValue - firstSliderInside - 30 + 20 - 14}px`
        }
        firstSliderNumber.innerHTML = `03/`
        firstSLiderInput.value = 3
    })
    solomaElement[3].addEventListener('click', (e) => {
        whatToDisplay.forEach(item => item.classList.remove('display_active'))
        solomaElement.forEach(item => item.classList.remove('active-panda_or__not'))
        whatToDisplay[3].classList.add('display_active')
        solomaElement[3].classList.add('active-panda_or__not')
        if (window.screen.width <= 1940 && window.screen.width >= 1201) {
            firstSlider.style.left = `${startValue - (firstSliderInside * 2) - (45 * 2)}px`

        } else {
            startValue = 367
            firstSlider.style.left = `${startValue - (firstSliderInside * 2) - (30 * 2) + 20 - 14}px`            
        }
        firstSliderNumber.innerHTML = `04/`
        firstSLiderInput.value = 4
    })
    solomaElement[4].addEventListener('click', (e) => {
        whatToDisplay.forEach(item => item.classList.remove('display_active'))
        solomaElement.forEach(item => item.classList.remove('active-panda_or__not'))
        whatToDisplay[4].classList.add('display_active')
        solomaElement[4].classList.add('active-panda_or__not')
        if (window.screen.width <= 1940 && window.screen.width >= 1201) {
            firstSlider.style.left = `${startValue - (firstSliderInside * 3) - (45 * 3)}px`

        } else {
            startValue = 367
            firstSlider.style.left = `${startValue - (firstSliderInside * 3) - (30 * 3) + 20 - 14}px`            
        }        firstSliderNumber.innerHTML = `05/`
        firstSLiderInput.value = 5
    })
    solomaElement[5].addEventListener('click', (e) => {
        whatToDisplay.forEach(item => item.classList.remove('display_active'))
        solomaElement.forEach(item => item.classList.remove('active-panda_or__not'))
        whatToDisplay[5].classList.add('display_active')
        solomaElement[5].classList.add('active-panda_or__not')
        if (window.screen.width <= 1940 && window.screen.width >= 1201) {
            firstSlider.style.left = `${startValue - (firstSliderInside * 4) - (45 * 4)}px`

        } else {
            startValue = 367
            firstSlider.style.left = `${startValue - (firstSliderInside * 4) - (30 * 4) + 20 - 14}px`            
        }        firstSliderNumber.innerHTML = `06/`
        firstSLiderInput.value = 6
    })
    solomaElement[6].addEventListener('click', (e) => {
        whatToDisplay.forEach(item => item.classList.remove('display_active'))
        solomaElement.forEach(item => item.classList.remove('active-panda_or__not'))
        whatToDisplay[6].classList.add('display_active')
        solomaElement[6].classList.add('active-panda_or__not')
        if (window.screen.width <= 1940 && window.screen.width >= 1201) {
            firstSlider.style.left = `${startValue - (firstSliderInside * 5) - (45 * 5)}px`

        } else {
            startValue = 367
            firstSlider.style.left = `${startValue - (firstSliderInside * 5) - (30 * 5) + 20 - 14}px`            
        }        firstSliderNumber.innerHTML = `07/`
        firstSLiderInput.value = 7
    })
    solomaElement[7].addEventListener('click', (e) => {
        whatToDisplay.forEach(item => item.classList.remove('display_active'))
        solomaElement.forEach(item => item.classList.remove('active-panda_or__not'))
        whatToDisplay[7].classList.add('display_active')
        solomaElement[7].classList.add('active-panda_or__not')
        if (window.screen.width <= 1940 && window.screen.width >= 1201) {
            firstSlider.style.left = `${startValue - (firstSliderInside * 6) - (45 * 6)}px`
        }else {
            startValue = 367
            firstSlider.style.left = `${startValue - (firstSliderInside * 6) - (30 * 6) + 20 - 14}px`            
        }        firstSliderNumber.innerHTML = `08/`
        firstSLiderInput.value = 8
    })
    firstSLiderInput.addEventListener('input', (e) => {
        sobachka = e.target.value
        
        firstSliderNumber.innerHTML = `0${sobachka}/`
        if (e.target.value === '1') {
            whatToDisplay.forEach(item => item.classList.remove('display_active'))
            solomaElement.forEach(item => item.classList.remove('active-panda_or__not'))
            whatToDisplay[0].classList.add('display_active')
            solomaElement[0].classList.add('active-panda_or__not')
            if (window.screen.width <= 1940 && window.screen.width >= 1201) {
                firstSlider.style.left = `${startValue + firstSliderInside + 45}px`
            } else {
                startValue = 367
                firstSlider.style.left = `${startValue + firstSliderInside + 30 - 20 + 25}px`
            }

        } else if (e.target.value === '2') {
            whatToDisplay.forEach(item => item.classList.remove('display_active'))
            solomaElement.forEach(item => item.classList.remove('active-panda_or__not'))
            whatToDisplay[1].classList.add('display_active')
            solomaElement[1].classList.add('active-panda_or__not')
            if (window.screen.width <= 1940 && window.screen.width >= 1201) {
                firstSlider.style.left = `${startValue}px`
            } else {
                startValue = 367
                firstSlider.style.left = `${startValue}px`
            }

        } else if (e.target.value === '3') {
            whatToDisplay.forEach(item => item.classList.remove('display_active'))
            solomaElement.forEach(item => item.classList.remove('active-panda_or__not'))
            whatToDisplay[2].classList.add('display_active')
            solomaElement[2].classList.add('active-panda_or__not')
            if (window.screen.width <= 1940 && window.screen.width >= 1201) {
                firstSlider.style.left = `${startValue - firstSliderInside - 45}px`

            } else {
                startValue = 367
                firstSlider.style.left = `${startValue - firstSliderInside - 30 + 20 - 14}px`
            }
        } else if (e.target.value === '4') {
            whatToDisplay.forEach(item => item.classList.remove('display_active'))
            solomaElement.forEach(item => item.classList.remove('active-panda_or__not'))
            whatToDisplay[3].classList.add('display_active')
            solomaElement[3].classList.add('active-panda_or__not')
            if (window.screen.width <= 1940 && window.screen.width >= 1201) {
                firstSlider.style.left = `${startValue - (firstSliderInside * 2) - (45 * 2)}px`

            } else {
                startValue = 367
                firstSlider.style.left = `${startValue - (firstSliderInside * 2) - (30 * 2) + 20 - 14}px`            
            }
        } else if (e.target.value === '5') {
            whatToDisplay.forEach(item => item.classList.remove('display_active'))
            solomaElement.forEach(item => item.classList.remove('active-panda_or__not'))
            whatToDisplay[4].classList.add('display_active')
            solomaElement[4].classList.add('active-panda_or__not')
            if (window.screen.width <= 1940 && window.screen.width >= 1201) {
                firstSlider.style.left = `${startValue - (firstSliderInside * 3) - (45 * 3)}px`

            } else {
                startValue = 367
                firstSlider.style.left = `${startValue - (firstSliderInside * 3) - (30 * 3) + 20 - 14}px`            
            }
        } else if (e.target.value === '6') {
            whatToDisplay.forEach(item => item.classList.remove('display_active'))
            solomaElement.forEach(item => item.classList.remove('active-panda_or__not'))
            whatToDisplay[5].classList.add('display_active')
            solomaElement[5].classList.add('active-panda_or__not')
            if (window.screen.width <= 1940 && window.screen.width >= 1201) {
                firstSlider.style.left = `${startValue - (firstSliderInside * 4) - (45 * 4)}px`

            } else {
                startValue = 367
                firstSlider.style.left = `${startValue - (firstSliderInside * 4) - (30 * 4) + 20 - 14}px`            
            }
        } else if (e.target.value === '7') {
            whatToDisplay.forEach(item => item.classList.remove('display_active'))
            solomaElement.forEach(item => item.classList.remove('active-panda_or__not'))
            whatToDisplay[6].classList.add('display_active')
            solomaElement[6].classList.add('active-panda_or__not')
            if (window.screen.width <= 1940 && window.screen.width >= 1201) {
                firstSlider.style.left = `${startValue - (firstSliderInside * 5) - (45 * 5)}px`

            } else {
                startValue = 367
                firstSlider.style.left = `${startValue - (firstSliderInside * 5) - (30 * 5) + 20 - 14}px`            
            }
        } else if (e.target.value === '8') {
            whatToDisplay.forEach(item => item.classList.remove('display_active'))
            solomaElement.forEach(item => item.classList.remove('active-panda_or__not'))
            whatToDisplay[7].classList.add('display_active')
            solomaElement[7].classList.add('active-panda_or__not')
            if (window.screen.width <= 1940 && window.screen.width >= 1201) {
                firstSlider.style.left = `${startValue - (firstSliderInside * 6) - (45 * 6)}px`
            }else {
                startValue = 367
                firstSlider.style.left = `${startValue - (firstSliderInside * 6) - (30 * 6) + 20 - 14}px`            
            }
        }
    })
}
document.addEventListener('DOMContentLoaded', App)
