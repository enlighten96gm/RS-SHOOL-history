import CreateCar from "../create-car"
import PutCar from "../dal/put-car"

const RandomCars = () => {
    const generateCars: HTMLElement = document.querySelector('.buttons__block_3')
    const randomItBaby = () => {
        let number = 5
        for (let i = 0; i < number; i++) {
            CreateCar(true)
            PutCar()
        }
    }
    generateCars.removeEventListener('click', randomItBaby)
    generateCars.addEventListener('click', randomItBaby)
}
export default RandomCars