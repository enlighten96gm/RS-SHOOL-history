import { newUserType, gameType } from './../types/types';
const ChangeScore = (state: newUserType, gameState: gameType) => {
    console.log('changeScore');
    
    const scoreContainder: HTMLElement = document.querySelector('.score__container_block')

    scoreContainder.innerHTML += `
    <div class="player__container">
        <div class="player__container_img"></div>
        <div class="player__container_info">
            <div class="player__container_info-name">${state.name}</div>
            <div class="player__container_info-surname">${state.surname}</div>
        </div>
        <div class="player__container_info-email">${state.email}</div>
        <div class="player__container_score">
            <div class="player__container_score-up">SCORE</div>
            <div class="player__container_score-down">69</div>
        </div>
    </div>
    `
}
export default ChangeScore
