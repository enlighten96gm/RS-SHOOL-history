import CreateFirstWinner from "../dal/create-first-winner"
import GetSingleCar from "../dal/get-single-car"
import flag from "../types/winner-bollean"
import WinCounter from "./win-counter"
import WinnerData from "./winner-state"
import WinnersArray from "./winners-id"

const GetWinner = (res: any, id: string) => {
    if (flag[0] === true) {
        flag.splice(0, flag.length)
        flag.push(false)
        const timeArr = Math.trunc(res.distance / res.velocity).toString().split('')
        const finalTime = []
        finalTime.push(timeArr[0] + ',' + timeArr[1] + timeArr[2])
        const time = finalTime.join('')

        if (WinnersArray.includes(id)) {
            // TYT update
        } else {
            WinnersArray.push(id)
            GetSingleCar(id).then((item: any) => {
                let NewWinnerData = {...WinnerData}
                NewWinnerData = {
                    id: Number(id),
                    wins: WinCounter,
                    time: parseFloat(time.replace(',','.').replace(' ',''))
                }
                CreateFirstWinner(NewWinnerData)   
            })
        } 
    }  
}
export default GetWinner