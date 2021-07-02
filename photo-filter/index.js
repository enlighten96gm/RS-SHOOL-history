const App = () => {
    const filter = document.querySelector('.filters')
    const output = document.getElementsByName('result')
    const image = document.querySelector('.image')
    const reset = document.querySelector('.btn-reset')
    const next = document.querySelector('.btn-next')
    const load = document.querySelector('.btn-load')
    const save = document.querySelector('.btn-save')
    const zeroInput = document.querySelectorAll('.sameInp')
    const firstInput = document.querySelector('.sameInp2')
    const fileInput = document.querySelector('.btn-load--input')
    const fullscrinBtn = document.querySelector('.fullscreen')

    let pressed = false
    let counter1 = 1
    let counter2 = 10
    let day = ''
    let canvasBlur = ''

    fullscrinBtn.addEventListener('click', (e) => {
        function getFull() {
            return document.fullscreenElement
        }
        if (getFull()) {
            document.exitFullscreen()
        }
        document.documentElement.requestFullscreen()
    })

    let timer = new Date()
    let now = timer.getHours()
    const getDate = () => {
        if (now === 0 || now === 1 || now === 2 ||
            now === 3 || now === 4 || now === 5) {
                return day = 'night'
        } else if (now === 6 || now === 7 || now === 8
            || now === 9 || now === 10 || now === 11) {
                return day = 'morning'
        } else if (now === 12 || now === 13 || now === 14
            || now === 15 || now === 16 || now === 17) {
                return day = 'day'
        } else if (now === 18 || now === 19 || now === 20
            || now === 21 || now === 22 || now === 23) {
                return day = 'evening'
            }
    }
    getDate()
    
    const canvas = document.querySelector('canvas');
//  44 45 было img.width img.height и 48 не быо image.width, image.height
  function drawImage(n) {
    const img = new Image();
    img.setAttribute('crossOrigin', 'anonymous'); 
    img.src = image.src;
    img.onload = function() {
      canvas.width = this.width;
      canvas.height = this.height;
      const ctx = canvas.getContext("2d");
      ctx.filter = n;
      ctx.filter = getComputedStyle(image).filter.replace(
        `blur(${canvasBlur}px)`, `blur(${((img.width + img.height) / (image.width + image.height)) * canvasBlur}px)`)
      ctx.drawImage(img, 0, 0, this.width, this.height);
    };  
  }
  drawImage()
  console.log(canvas.width);
  


    document.addEventListener('mousedown', (e) => {
        pressed = true
        filter.addEventListener('click', (e) => {
            if (e.target.name === "blur") {
                canvasBlur = e.target.value
                output[0].value = e.target.value
                image.style.filter = `blur(${output[0].value}px) 
                invert(${output[1].value}%)
                sepia(${output[2].value}%)
                saturate(${output[3].value}%)
                hue-rotate(${output[4].value}deg)`
                canvas.style.filter = `blur(${output[0].value}px) 
                invert(${output[1].value}%)
                sepia(${output[2].value}%)
                saturate(${output[3].value}%)
                hue-rotate(${output[4].value}deg)`
                drawImage(canvas.style.filter);
            } else if (e.target.name === "invert") {
                output[1].value = e.target.value
                image.style.filter = `blur(${output[0].value}px) 
                invert(${output[1].value}%)
                sepia(${output[2].value}%)
                saturate(${output[3].value}%)
                hue-rotate(${output[4].value}deg)`
                canvas.style.filter = `blur(${output[0].value}px) 
                invert(${output[1].value}%)
                sepia(${output[2].value}%)
                saturate(${output[3].value}%)
                hue-rotate(${output[4].value}deg)`
                drawImage(canvas.style.filter);
            } else if (e.target.name === "sepia") {
                output[2].value = e.target.value
                image.style.filter = `blur(${output[0].value}px) 
                invert(${output[1].value}%)
                sepia(${output[2].value}%)
                saturate(${output[3].value}%)
                hue-rotate(${output[4].value}deg)`
                canvas.style.filter = `blur(${output[0].value}px) 
                invert(${output[1].value}%)
                sepia(${output[2].value}%)
                saturate(${output[3].value}%)
                hue-rotate(${output[4].value}deg)`
                drawImage(canvas.style.filter);
            } else if (e.target.name === "saturate") {
                output[3].value = e.target.value
                image.style.filter = `blur(${output[0].value}px) 
                invert(${output[1].value}%)
                sepia(${output[2].value}%)
                saturate(${output[3].value}%)
                hue-rotate(${output[4].value}deg)`
                canvas.style.filter = `blur(${output[0].value}px) 
                invert(${output[1].value}%)
                sepia(${output[2].value}%)
                saturate(${output[3].value}%)
                hue-rotate(${output[4].value}deg)`
                drawImage(canvas.style.filter);
            } else if (e.target.name === "hue") {
                output[4].value = e.target.value
                image.style.filter = `blur(${output[0].value}px) 
                invert(${output[1].value}%)
                sepia(${output[2].value}%)
                saturate(${output[3].value}%)
                hue-rotate(${output[4].value}deg)`
                canvas.style.filter = `blur(${output[0].value}px) 
                invert(${output[1].value}%)
                sepia(${output[2].value}%)
                saturate(${output[3].value}%)
                hue-rotate(${output[4].value}deg)`
                drawImage(canvas.style.filter);
            }
            return canvas.style.filter
        })
    })
    document.addEventListener('mouseup', (e) => {
        pressed = false
    })

    filter.addEventListener('mousemove', (e) => {
        if (pressed === true) {
            if (e.target.name === "blur") {
                output[0].value = e.target.value
                image.style.filter = `blur(${output[0].value}px) 
                invert(${output[1].value}%)
                sepia(${output[2].value}%)
                saturate(${output[3].value}%)
                hue-rotate(${output[4].value}deg)`
            } else if (e.target.name === "invert") {
                output[1].value = e.target.value
                image.style.filter = `blur(${output[0].value}px) 
                invert(${output[1].value}%)
                sepia(${output[2].value}%)
                saturate(${output[3].value}%)
                hue-rotate(${output[4].value}deg)`
            } else if (e.target.name === "sepia") {
                output[2].value = e.target.value
                image.style.filter = `blur(${output[0].value}px) 
                invert(${output[1].value}%)
                sepia(${output[2].value}%)
                saturate(${output[3].value}%)
                hue-rotate(${output[4].value}deg)`
            } else if (e.target.name === "saturate") {
                output[3].value = e.target.value
                image.style.filter = `blur(${output[0].value}px) 
                invert(${output[1].value}%)
                sepia(${output[2].value}%)
                saturate(${output[3].value}%)
                hue-rotate(${output[4].value}deg)`
            } else if (e.target.name === "hue") {
                output[4].value = e.target.value
                image.style.filter = `blur(${output[0].value}px) 
                invert(${output[1].value}%)
                sepia(${output[2].value}%)
                saturate(${output[3].value}%)
                hue-rotate(${output[4].value}deg)`
            } 
        }
    })
    
    reset.addEventListener('click', (e) => {
        image.style.filter = `blur(0px) 
                invert(0%)
                sepia(0%)
                saturate(100%)
                hue-rotate(0deg)`
        canvas.style.filter = `blur(0px) 
                invert(0%)
                sepia(0%)
                saturate(100%)
                hue-rotate(0deg)`
                output[0].innerHTML = '0'
                output[1].innerHTML = '0'
                output[2].innerHTML = '0'
                output[3].innerHTML = '100'
                output[4].innerHTML = '0'
        drawImage(canvas.style.filter);
        e.target.classList.add('btn-active')
        next.classList.remove('btn-active')
        load.classList.remove('btn-active')
        save.classList.remove('btn-active')
        zeroInput.forEach(item => item.value = '0')
        firstInput.value = '100'
    })
    next.addEventListener('click', (e) => {
        e.target.classList.add('btn-active')
        reset.classList.remove('btn-active')
        load.classList.remove('btn-active')
        save.classList.remove('btn-active')
        if (day == 'evening') {
            if (counter1 <= 9) {
                image.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/0${counter1}.jpg`
                counter1++
            } else if (counter2 <= 20) {
                image.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/${counter2}.jpg`
                counter2++
            } else {
                counter1 = 1
                counter2 = 10
                image.src = 'assets/img/img.jpg'
            }
        } else if (day == 'night') {
            if (counter1 <= 9) {
                image.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/0${counter1}.jpg`
                counter1++
            } else if (counter2 <= 20) {
                image.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/night/${counter2}.jpg`
                counter2++
            } else {
                counter1 = 1
                counter2 = 10
                image.src = 'assets/img/img.jpg'
            }
        } else if (day == 'day') {
            if (counter1 <= 9) {
                image.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/day/0${counter1}.jpg`
                counter1++
            } else if (counter2 <= 20) {
                image.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/day/${counter2}.jpg`
                counter2++
            } else {
                counter1 = 1
                counter2 = 10
                image.src = 'assets/img/img.jpg'
            }
        } else if (day == 'morning') {
            if (counter1 <= 9) {
                image.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/0${counter1}.jpg`
                counter1++
            } else if (counter2 <= 20) {
                image.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/morning/${counter2}.jpg`
                counter2++
            } else {
                counter1 = 1
                counter2 = 10
                image.src = 'assets/img/img.jpg'
            }
        }
        drawImage(canvas.style.filter);
    })
    fileInput.addEventListener('change', (e) => {
        const file = fileInput.files[0]
        const reader = new FileReader()
        reader.onload = () => {
            newSrc = reader.result
            console.log(file.width);
            image.innerHTML = ''
            image.src = newSrc
            drawImage(canvas.style.filter);
        }
        reader.readAsDataURL(file)
    })
    load.addEventListener('click', (e) => {
        const file = fileInput.files[0]
        const reader = new FileReader()
        reader.onload = () => {
            newSrc = reader.result
            image.innerHTML = ''
            image.src = newSrc
            drawImage(canvas.style.filter);
        }
        reader.readAsDataURL(file)
        load.classList.add('btn-active')
        next.classList.remove('btn-active')
        reset.classList.remove('btn-active')
        save.classList.remove('btn-active')        
    })
    save.addEventListener('click', (e) => {
        e.target.classList.add('btn-active')
        next.classList.remove('btn-active')
        load.classList.remove('btn-active')
        reset.classList.remove('btn-active')
        let link = document.createElement('a')
        link.download = 'download.png'
        link.href = canvas.toDataURL("image/png")
        link.click()
        link.delete
    })
}
document.addEventListener('DOMContentLoaded', App)
