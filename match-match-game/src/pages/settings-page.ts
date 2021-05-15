import Idb from '../indexed-DB';
import { newUserType } from './../types/types';
type handlerType = (e: MouseEvent) => void
const Settings = (state: newUserType) => {
    const cardTypeBtn: HTMLElement = document.querySelector('.cards__type_third')
    const cardDifficultyBtn: HTMLElement = document.querySelector('.cards__difficulty_third')
    const toggleSettings: handlerType = (e) => {
        const element = e.target as HTMLElement
        if (element.className === 'cards__type_second') {
            cardTypeBtn.classList.add('if__btn_active')
        }
        if (element.className === 'cards__difficulty_second') {
            cardDifficultyBtn.classList.add('if__btn_active')
        }
        
    }
    const switchTypeCard: handlerType = (e) => {
        const element = e.target as HTMLElement
        if (element.id === '1') {
            state.cards = 'animals'
            cardTypeBtn.classList.remove('if__btn_active')
        }
        if (element.id === '2') {
            state.cards = 'people'
            cardTypeBtn.classList.remove('if__btn_active') 
        }
        if (element.id === '3') {
            state.cards = '?'
            cardTypeBtn.classList.remove('if__btn_active')
        }
        Idb.putObj(state)
    }
    const switchDifficulty: handlerType = (e) => {
        const element = e.target as HTMLElement
        if (element.id === '1') {
            state.difculty = 'easy'
            cardDifficultyBtn.classList.remove('if__btn_active')
        }
        if (element.id === '2') {
            state.difculty = 'medium'
            cardDifficultyBtn.classList.remove('if__btn_active') 
        }
        if (element.id === '3') {
            state.difculty = 'hard'
            cardDifficultyBtn.classList.remove('if__btn_active')
        }
        Idb.putObj(state)
    }
    cardDifficultyBtn.addEventListener('click', switchDifficulty)
    cardTypeBtn.addEventListener('click', switchTypeCard)
    document.addEventListener('click', toggleSettings)
}
export default Settings