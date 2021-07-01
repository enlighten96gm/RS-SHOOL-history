const GameCycle = async (soundArray: Array<string>) => {
    for (let i = soundArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = soundArray[i];
        soundArray[i] = soundArray[j];
        soundArray[j] = temp;
    }
    const randomSounds = soundArray
    return randomSounds
}
export default GameCycle