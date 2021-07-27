const GameCycle = async (soundArray: Array<string>) => {
  for (let i = soundArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = soundArray[i];
    soundArray[i] = soundArray[j];
    soundArray[j] = temp;
  }
  const randomSounds = soundArray;
  return randomSounds;
};
export default GameCycle;
