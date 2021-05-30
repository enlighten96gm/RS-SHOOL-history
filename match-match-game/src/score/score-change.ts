import { newUserType, gameType } from '../types/types';
import Idb from '../indexed-DB';
import CreateScoreFunc from './final-score-create';

const ChangeScore = (state: newUserType, gameState: gameType): void => {
  const formula: number = (gameState.clicks * 100 - (gameState.time) * 10);
  const store = state;
  store.score = formula;
  Idb.putObj(store);
  CreateScoreFunc();
};
export default ChangeScore;
