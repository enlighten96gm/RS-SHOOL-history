import { url } from './dal/instance';
import CarsArray from './types/cars-array';

const FirstCreate = async () => {
    const response = await fetch(`${url}/garage?_page=1&_limit= 7`, {
        method: 'GET'
    })
    const data = await response.json()
    CarsArray.splice(0, CarsArray.length)
    data.map((item: any) => {
        CarsArray.push(item.id)
    })
    return data
}
export default FirstCreate