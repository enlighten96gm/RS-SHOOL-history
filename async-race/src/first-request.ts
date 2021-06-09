import { url } from './dal/instance';
import CarsArray from './types/cars-array';
import { pageCounter, HowLargeMyGarage } from './types/pagination-state';

const FirstCreate = async () => {
    // dobavil page i limit
    const response = await fetch(`${url}/garage?_page=${pageCounter}&_limit= 7`, {
        method: 'GET'
    })
    
    const data = await response.json()
    CarsArray.splice(0, CarsArray.length)
    data.map((item: any) => {
        CarsArray.push(item.id)
    })
    let count = await response.headers.get('X-Total-Count')
    HowLargeMyGarage.a = count
    return data
}
export default FirstCreate