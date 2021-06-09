import GetSingleCar from '../dal/get-single-car';
import { url } from './../dal/instance';
import SortWInnersToggler from './sort-toggle-winners';
import { nameOfTheCar, colorOfTheCar } from './../types/for-winners-state';

const ToggleAllWiners = async (sort: string, oreder: string, res: any) => {
    await nameOfTheCar.splice(0, nameOfTheCar.length)
    await colorOfTheCar.splice(0, colorOfTheCar.length)
    await res.map((item: any) => {
        GetSingleCar(item.id).then((car: any) => {
            nameOfTheCar.push(car.name)
            colorOfTheCar.push(car.color)
        })
    })
    const response = await fetch(`${url}/winners?_sort=${sort}&_order=${oreder}`, {
        method: 'GET'
      })
      let greeting = await response.json()
      SortWInnersToggler(greeting)
      return greeting
}
export default ToggleAllWiners