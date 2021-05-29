import Idb from "../indexed-DB"
import { data64Arr } from "./score-array"

const CreateScoreFunc = (): any => {
    const scoreContainder: HTMLElement = document.querySelector('.score__container_block');
    const userArray: any = []
    scoreContainder.innerHTML = '';
    Idb.getLength().then((res: any) => {
        for (let i = res; i > res - 10; i--) {
          if (i <= 0) {
            return
          }
          Idb.getObj(`${i}`).then((user: any) => {
            userArray.push(user)
            userArray.sort((a: any, b: any) => {
              if (a.score > b.score) {
                return -1
              }
              if (a.score < b.score) {
                return 1
              }
              return 0
            })
            console.log(userArray);
            
            if (userArray.length === res || userArray.length === 10) {
                console.log('userArray');
                
              for (let i = 0; i < userArray.length; i += 1) {
                const decoded = atob(userArray[i].data64);
                data64Arr.push(decoded);
                scoreContainder.innerHTML += `
                <div class="player__container">
                    <div class="player__container_img">
                        <img class="score__upload_img" src="${data64Arr[i]}" alt="">
                    </div>
                    <div class="player__container_info">
                        <div class="player__container_info-name">${userArray[i].name}</div>
                        <div class="player__container_info-surname">${userArray[i].surname}</div>
                    </div>
                    <div class="player__container_info-email">${userArray[i].email}</div>
                    <div class="player__container_score">
                        <div class="player__container_score-up">SCORE</div>
                        <div class="player__container_score-down">${userArray[i].score}</div>
                    </div>
                </div>
                `;
                }
            }
          })
        }
      })
      return null
}
export default CreateScoreFunc