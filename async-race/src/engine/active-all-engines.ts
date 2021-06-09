import StartCarApi from "../dal/start-car-engine"
import CarsArray from "../types/cars-array"
import flag from "../types/winner-bollean"
import AnimateCar from "./animate-car"

const ActiveAllEngines = () => {
    const ActiveAll: HTMLElement = document.querySelector('.buttons__block_1')
    const activeAllHeandler = () => {
        flag.splice(0, flag.length)
        flag.push(true)
        CarsArray.map((item: any) => {
            StartCarApi(item).then((res: any) => {
                AnimateCar(res, item)                
            })
        })
    } 
    ActiveAll.addEventListener('click', activeAllHeandler)
}
export default ActiveAllEngines