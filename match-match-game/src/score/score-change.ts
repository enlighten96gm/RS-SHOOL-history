import { scoreArr, nameArr, surnameArr, emailArr, data64Arr } from './score-array';
import { newUserType, gameType } from './../types/types';
const ChangeScore = (state: newUserType, gameState: gameType) => {
    let formula: number = (gameState.clicks * 100 - (gameState.time) * 10)
    console.log(state.data64);
    
    const decoded = atob(state.data64)
    data64Arr.push(decoded)
    // console.log(data64Arr);
    // console.log(data64Arr[1] === data64Arr[0]);
    
    scoreArr.push(formula)
    nameArr.push(state.name)
    surnameArr.push(state.surname)
    emailArr.push(state.email)
    
    const scoreContainder: HTMLElement = document.querySelector('.score__container_block')
    scoreArr.sort((a: number, b: number) => {
        return b - a 
    })
    console.log(scoreArr);
    scoreContainder.innerHTML = ''
    for (let i = 0; i < scoreArr.length; i++) {
        scoreContainder.innerHTML += `
    <div class="player__container">
        <div class="player__container_img">
            <img class="score__upload_img" src="${data64Arr[i]}" alt="">
        </div>
        <div class="player__container_info">
            <div class="player__container_info-name">${nameArr[i]}</div>
            <div class="player__container_info-surname">${surnameArr[i]}</div>
        </div>
        <div class="player__container_info-email">${emailArr[i]}</div>
        <div class="player__container_score">
            <div class="player__container_score-up">SCORE</div>
            <div class="player__container_score-down">${scoreArr[i]}</div>
        </div>
    </div>
    `
    }
}
export default ChangeScore
