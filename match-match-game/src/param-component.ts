import GameCrash from './crash-game';
import DifficultyToggler from './difficulty/difficultyHandler';
import Idb from './indexed-DB';
import BestScore from './pages/best-score';
import Settings from './pages/settings-page';
import { newUserType } from './types/types';
type handlerType = (e: MouseEvent) => void
const Param = (state: newUserType): void => {
    const registerButton: HTMLLIElement = document.querySelector('.third__block-header_text')
    const settings: HTMLElement = document.querySelector('.second__block-header_settings')
    const settingsWindow: HTMLElement = document.querySelector('.settings')
    const score: HTMLElement = document.querySelector('.score')
    const startButton: HTMLLIElement = document.querySelector('.fourth__block-header')
    const stopGameBtn: HTMLLIElement = document.querySelector('.fifth__block-header')
    const gameWindow: HTMLLIElement = document.querySelector('.game')
    const startGameBtn: HTMLLIElement =  document.querySelector('.start__game')
    const logOutBtn: HTMLLIElement =  document.querySelector('.log__out')
    const loginForm: HTMLElement  = document.querySelector('.login');
    const scoreBtn: HTMLElement = document.querySelector('.second__block-header_best')
    
    if (state) {
        loginForm.classList.remove('login__active_vision')
        registerButton.style.display = 'none'
        startButton.classList.remove('inactive__header')
    }
    const logOutHeandler: handlerType = (e) => {
        registerButton.style.display = 'flex'
        startButton.classList.add('inactive__header')
        settingsWindow.classList.remove('if__settings_active')
    }
    const startGameHeandler: handlerType = (e) => {
        startButton.classList.add('inactive__header')
        stopGameBtn.classList.remove('inactive__header')
        gameWindow.classList.add('if__game_active')
        settingsWindow.classList.remove('if__settings_active')
        DifficultyToggler(state.ssn)
        //     ActiveGame(state)
    }
    const stopGameHeandler: handlerType = (e) => {
        startButton.classList.remove('inactive__header')
        stopGameBtn.classList.add('inactive__header')
        gameWindow.classList.remove('if__game_active')
        GameCrash()
    }
    const settingsHeandler: handlerType = (e) => {
        settingsWindow.classList.add('if__settings_active')
        score.classList.remove('if__score_active')
        Settings(state)
    }
    const scoreHeandler: handlerType = (e) => {
        score.classList.add('if__score_active')
        settingsWindow.classList.remove('if__settings_active')
        // Idb.getObj(state.ssn).then((res:newUserType) => BestScore(res)) 
    }
    scoreBtn.addEventListener('click', scoreHeandler)
    settings.addEventListener('click', settingsHeandler)
    stopGameBtn.addEventListener('click', stopGameHeandler)
    logOutBtn.addEventListener('click', logOutHeandler)
    startGameBtn.addEventListener('click', startGameHeandler)
}
export default Param