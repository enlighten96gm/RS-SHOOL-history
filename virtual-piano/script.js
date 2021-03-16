const App = () => {
const fullPiano = document.querySelector('.piano')
const buttonWB = document.querySelectorAll('.piano-key')
const buttonNotes = document.querySelector('.btn-notes')
const buttonLetters = document.querySelector('.btn-letters')
const fullscrinBtn = document.querySelector('.fullscreen')
let pressed = false
let audio = (x) => {
    let music = new Audio(x)
    music.play()
} 
// ОСТОРОЖНО!!! МНОГО КОДА, сделано специально для вас, любимые проверяющие =) (для простоты)
fullscrinBtn.addEventListener('click', (e) => {
    function getFull() {
        return document.fullscreenElement
    }
    if (getFull()) {
        document.exitFullscreen()
    }
    document.documentElement.requestFullscreen()
})
buttonNotes.addEventListener('mousedown', (e) => {
    buttonNotes.classList.add('btn-active')
    buttonLetters.classList.remove('btn-active')
    buttonWB.forEach(item => {
        item.classList.remove('piano-key-letter')
    })
})
buttonLetters.addEventListener('mousedown', () => {
    buttonLetters.classList.add('btn-active')
    buttonNotes.classList.remove('btn-active')
    buttonWB.forEach(item => {
        item.classList.add('piano-key-letter')
    })
})

fullPiano.addEventListener('mousedown', (e) => {
    pressed = true
    if (e.target.dataset.letter === "D") {
        audio('./assets/audio/c.mp3')
        e.target.classList.add('piano-key-active')
        e.target.classList.add('piano-key-active-pseudo')
    } else if (e.target.dataset.letter === "F") {
        audio('./assets/audio/d.mp3')
        e.target.classList.add('piano-key-active')
        e.target.classList.add('piano-key-active-pseudo')
    } else if (e.target.dataset.letter === "G") {
        audio('./assets/audio/e.mp3')
        e.target.classList.add('piano-key-active')
        e.target.classList.add('piano-key-active-pseudo')
    } else if (e.target.dataset.letter === "H") {
        audio('./assets/audio/f.mp3')
        e.target.classList.add('piano-key-active')
        e.target.classList.add('piano-key-active-pseudo')
    } else if (e.target.dataset.letter === "J") {
        audio('./assets/audio/g.mp3')
        e.target.classList.add('piano-key-active')
        e.target.classList.add('piano-key-active-pseudo')
    } else if (e.target.dataset.letter === "K") {
        audio('./assets/audio/a.mp3')
        e.target.classList.add('piano-key-active')
        e.target.classList.add('piano-key-active-pseudo')
    } else if (e.target.dataset.letter === "L") {
        audio('./assets/audio/b.mp3')
        e.target.classList.add('piano-key-active')
        e.target.classList.add('piano-key-active-pseudo')
    } else if (e.target.dataset.letter === "R") {
        audio('./assets/audio/c♯.mp3')
        e.target.classList.add('piano-key-active')
        e.target.classList.add('piano-key-active-pseudo')
    } else if (e.target.dataset.letter === "T") {
        audio('./assets/audio/d♯.mp3')
        e.target.classList.add('piano-key-active')
        e.target.classList.add('piano-key-active-pseudo')
    } else if (e.target.dataset.letter === "U") {
        audio('./assets/audio/f♯.mp3')
        e.target.classList.add('piano-key-active')
        e.target.classList.add('piano-key-active-pseudo')
    } else if (e.target.dataset.letter === "I") {
        audio('./assets/audio/g♯.mp3')
        e.target.classList.add('piano-key-active')
        e.target.classList.add('piano-key-active-pseudo')
    } else if (e.target.dataset.letter === "O") {
        audio('./assets/audio/a♯.mp3')
        e.target.classList.add('piano-key-active')
        e.target.classList.add('piano-key-active-pseudo')
    }
})
window.addEventListener('mouseup', () => {
    pressed = false
    buttonWB.forEach(item => {
        item.classList.remove('piano-key-active')
        item.classList.remove('piano-key-active-pseudo')
    })
})
fullPiano.addEventListener('mouseover', (e) => {
    if (pressed == true) {
        if (e.target.dataset.letter === "D") {
            audio('./assets/audio/c.mp3')
            e.target.classList.add('piano-key-active')
            e.target.classList.add('piano-key-active-pseudo')
        } else if (e.target.dataset.letter === "F") {
            audio('./assets/audio/d.mp3')
            e.target.classList.add('piano-key-active')
            e.target.classList.add('piano-key-active-pseudo')
        } else if (e.target.dataset.letter === "G") {
            audio('./assets/audio/e.mp3')
            e.target.classList.add('piano-key-active')
            e.target.classList.add('piano-key-active-pseudo')
        } else if (e.target.dataset.letter === "H") {
            audio('./assets/audio/f.mp3')
            e.target.classList.add('piano-key-active')
            e.target.classList.add('piano-key-active-pseudo')
        } else if (e.target.dataset.letter === "J") {
            audio('./assets/audio/g.mp3')
            e.target.classList.add('piano-key-active')
            e.target.classList.add('piano-key-active-pseudo')
        } else if (e.target.dataset.letter === "K") {
            audio('./assets/audio/a.mp3')
            e.target.classList.add('piano-key-active')
            e.target.classList.add('piano-key-active-pseudo')
        } else if (e.target.dataset.letter === "L") {
            audio('./assets/audio/b.mp3')
            e.target.classList.add('piano-key-active')
            e.target.classList.add('piano-key-active-pseudo')
        } else if (e.target.dataset.letter === "R") {
            audio('./assets/audio/c♯.mp3')
            e.target.classList.add('piano-key-active')
            e.target.classList.add('piano-key-active-pseudo')
        } else if (e.target.dataset.letter === "T") {
            audio('./assets/audio/d♯.mp3')
            e.target.classList.add('piano-key-active')
            e.target.classList.add('piano-key-active-pseudo')
        } else if (e.target.dataset.letter === "U") {
            audio('./assets/audio/f♯.mp3')
            e.target.classList.add('piano-key-active')
            e.target.classList.add('piano-key-active-pseudo')
        } else if (e.target.dataset.letter === "I") {
            audio('./assets/audio/g♯.mp3')
            e.target.classList.add('piano-key-active')
            e.target.classList.add('piano-key-active-pseudo')
        } else if (e.target.dataset.letter === "O") {
            audio('./assets/audio/a♯.mp3')
            e.target.classList.add('piano-key-active')
            e.target.classList.add('piano-key-active-pseudo')
        }
    }   
})

buttonWB.forEach(item => {
    item.addEventListener('mouseleave', (e) => {
        item.classList.remove('piano-key-active')
        item.classList.remove('piano-key-active-pseudo')
    })
})

document.addEventListener('keydown', (e) => {
    if (e.repeat) {return}
        if (e.code === "KeyD") {
            audio('./assets/audio/c.mp3')
            for (let i = 0; i < buttonWB.length; i++) {
                let hehe = buttonWB[0]
                hehe.classList.add('piano-key-active')
                hehe.classList.add('piano-key-active-pseudo')
            }
        } else if (e.code === "KeyF") {
            audio('./assets/audio/d.mp3')
            for (let i = 0; i < buttonWB.length; i++) {
                let hehe = buttonWB[1]
                hehe.classList.add('piano-key-active')
                hehe.classList.add('piano-key-active-pseudo')
            }
        } else if (e.code === "KeyG") {
            audio('./assets/audio/e.mp3')
            for (let i = 0; i < buttonWB.length; i++) {
                let hehe = buttonWB[2]
                hehe.classList.add('piano-key-active')
                hehe.classList.add('piano-key-active-pseudo')
            }
        } else if (e.code === "KeyH") {
            audio('./assets/audio/f.mp3')
            for (let i = 0; i < buttonWB.length; i++) {
                let hehe = buttonWB[3]
                hehe.classList.add('piano-key-active')
                hehe.classList.add('piano-key-active-pseudo')
            }
        } else if (e.code === "KeyJ") {
            audio('./assets/audio/g.mp3')
            for (let i = 0; i < buttonWB.length; i++) {
                let hehe = buttonWB[4]
                hehe.classList.add('piano-key-active')
                hehe.classList.add('piano-key-active-pseudo')
            }
        } else if (e.code === "KeyK") {
            audio('./assets/audio/a.mp3')
            for (let i = 0; i < buttonWB.length; i++) {
                let hehe = buttonWB[5]
                hehe.classList.add('piano-key-active')
                hehe.classList.add('piano-key-active-pseudo')
            }
        } else if (e.code === "KeyL") {
            audio('./assets/audio/b.mp3')
            for (let i = 0; i < buttonWB.length; i++) {
                let hehe = buttonWB[6]
                hehe.classList.add('piano-key-active')
                hehe.classList.add('piano-key-active-pseudo')
            }
        } else if (e.code === "KeyR") {
            audio('./assets/audio/c♯.mp3')
            for (let i = 0; i < buttonWB.length; i++) {
                let hehe = buttonWB[7]
                hehe.classList.add('piano-key-active')
                hehe.classList.add('piano-key-active-pseudo')
            }
        } else if (e.code === "KeyT") {
            audio('./assets/audio/d♯.mp3')
            for (let i = 0; i < buttonWB.length; i++) {
                let hehe = buttonWB[8]
                hehe.classList.add('piano-key-active')
                hehe.classList.add('piano-key-active-pseudo')
            }
        } else if (e.code === "KeyU") {
            audio('./assets/audio/f♯.mp3')
            for (let i = 0; i < buttonWB.length; i++) {
                let hehe = buttonWB[10]
                hehe.classList.add('piano-key-active')
                hehe.classList.add('piano-key-active-pseudo')
            }
        } else if (e.code === "KeyI") {
            audio('./assets/audio/g♯.mp3')
            for (let i = 0; i < buttonWB.length; i++) {
                let hehe = buttonWB[11]
                hehe.classList.add('piano-key-active')
                hehe.classList.add('piano-key-active-pseudo')
            }
        } else if (e.code === "KeyO") {
            audio('./assets/audio/a♯.mp3')
            for (let i = 0; i < buttonWB.length; i++) {
                let hehe = buttonWB[12]
                hehe.classList.add('piano-key-active')
                hehe.classList.add('piano-key-active-pseudo')
            }
        }  
})
document.addEventListener('keyup', (e) => {
    for (let i = 0; i < buttonWB.length; i++) {
        if (e.code === "KeyD") {
            let hehe = buttonWB[0]
            hehe.classList.remove('piano-key-active')
            hehe.classList.remove('piano-key-active-pseudo')
        } else if (e.code === "KeyF") {
            let hehe = buttonWB[1]
            hehe.classList.remove('piano-key-active')
            hehe.classList.remove('piano-key-active-pseudo')
        } else if (e.code === "KeyG") {
            let hehe = buttonWB[2]
            hehe.classList.remove('piano-key-active')
            hehe.classList.remove('piano-key-active-pseudo')
        } else if (e.code === "KeyH") {
            let hehe = buttonWB[3]
            hehe.classList.remove('piano-key-active')
            hehe.classList.remove('piano-key-active-pseudo')
        } else if (e.code === "KeyJ") {
            let hehe = buttonWB[4]
            hehe.classList.remove('piano-key-active')
            hehe.classList.remove('piano-key-active-pseudo')
        } else if (e.code === "KeyK") {
            let hehe = buttonWB[5]
            hehe.classList.remove('piano-key-active')
            hehe.classList.remove('piano-key-active-pseudo')
        } else if (e.code === "KeyL") {
            let hehe = buttonWB[6]
            hehe.classList.remove('piano-key-active')
            hehe.classList.remove('piano-key-active-pseudo')
        } else if (e.code === "KeyR") {
            let hehe = buttonWB[7]
            hehe.classList.remove('piano-key-active')
            hehe.classList.remove('piano-key-active-pseudo')
        } else if (e.code === "KeyT") {
            let hehe = buttonWB[8]
            hehe.classList.remove('piano-key-active')
            hehe.classList.remove('piano-key-active-pseudo')
        } else if (e.code === "KeyU") {
            let hehe = buttonWB[10]
            hehe.classList.remove('piano-key-active')
            hehe.classList.remove('piano-key-active-pseudo')
        } else if (e.code === "KeyI") {
            let hehe = buttonWB[11]
            hehe.classList.remove('piano-key-active')
            hehe.classList.remove('piano-key-active-pseudo')
        } else if (e.code === "KeyO") {
            let hehe = buttonWB[12]
            hehe.classList.remove('piano-key-active')
            hehe.classList.remove('piano-key-active-pseudo')
        } 
    }
})
}
document.addEventListener('DOMContentLoaded', App)