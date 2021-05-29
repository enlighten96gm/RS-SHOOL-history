import { newUserType, gameType } from '../types/types';
import Idb from '../indexed-DB';
import CreateScoreFunc from './final-score-create'

const ChangeScore = (state: newUserType, gameState: gameType) => {
  const formula: number = (gameState.clicks * 100 - (gameState.time) * 10);
  state.score = formula
  Idb.putObj(state)
  CreateScoreFunc()
};
export default ChangeScore;
