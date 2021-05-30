import { newUserType } from '../types/types';
import Idb from '../indexed-DB';
import data64Arr from './score-array';

const CreateScoreFunc = (): void => {
  const scoreContainder: HTMLElement = document.querySelector('.score__container_block');
  const userArray: Array<newUserType> = [];

  scoreContainder.innerHTML = '';
  Idb.getLength().then((res) => {
    for (let i = res; i > res - 10; i -= 1) {
      if (i <= 0) {
        return;
      }
      Idb.getObj(`${i}`).then((user) => {
        userArray.push(user);
        userArray.sort((a: newUserType, b: newUserType) => {
          if (a.score > b.score) {
            return -1;
          }
          if (a.score < b.score) {
            return 1;
          }
          return 0;
        });

        if (userArray.length === res || userArray.length === 10) {
          for (let j = 0; j < userArray.length; j += 1) {
            const decoded = atob(userArray[j].data64);
            data64Arr.push(decoded);
            scoreContainder.innerHTML += `
                <div class="player__container">
                    <div class="player__container_img">
                        <img class="score__upload_img" src="${data64Arr[j]}" alt="">
                    </div>
                    <div class="player__container_info">
                        <div class="player__container_info-name">${userArray[j].name}</div>
                        <div class="player__container_info-surname">${userArray[j].surname}</div>
                    </div>
                    <div class="player__container_info-email">${userArray[j].email}</div>
                    <div class="player__container_score">
                        <div class="player__container_score-up">SCORE</div>
                        <div class="player__container_score-down">${userArray[j].score}</div>
                    </div>
                </div>
                `;
          }
        }
      });
    }
  });
  return null;
};
export default CreateScoreFunc;
