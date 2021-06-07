import CreateGarage from '../components/create-garage';
import { carState } from './../types/state';
import { url } from './instance';
const PutCar = async () => {
    const data = {
        name: carState.name,
        color: carState.color
    }
    let response = await fetch(`${url}/garage`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    let greeting = await response.json()
    CreateGarage()
    return greeting
}
export default PutCar