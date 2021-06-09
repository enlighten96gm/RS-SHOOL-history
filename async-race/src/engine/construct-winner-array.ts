import { nameOfTheCar, colorOfTheCar } from './../types/for-winners-state';
import GetAllWiners from "../dal/get-all-winners"
import GetSingleCar from "../dal/get-single-car"

const ConstructWinnerArray = () => {
    GetAllWiners().then((item: any) => {
        nameOfTheCar.splice(0, nameOfTheCar.length)
        colorOfTheCar.splice(0, colorOfTheCar.length)
        item.map((res: any) => {
            GetSingleCar(res.id).then((car:any) => {
                nameOfTheCar.push(car.name)
                colorOfTheCar.push(car.color)
            })
        })
    })
}
export default ConstructWinnerArray