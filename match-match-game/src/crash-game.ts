const GameCrash = () => {
    // тут что-то должно происходить , что сбрасывает таймер, и раскидывает карты опять по новому
    const deleteElement: HTMLElement = document.querySelector('.game__board_cards')
    const timerTIme: HTMLElement = document.querySelector('.game__board_timer')
    deleteElement.innerHTML = ''
    timerTIme.innerHTML = ''
}
export default GameCrash