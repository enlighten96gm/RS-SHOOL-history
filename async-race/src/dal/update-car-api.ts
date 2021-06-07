import { carState } from './../types/state';
import CreateGarage from '../components/create-garage';
import { url } from './instance';
const UpdateCaraApi = async (id: string) => {
    console.log(id);
    
    const newCar = {
        name: carState.name,
        color: carState.color
      }
    
    const response = await fetch(`${url}/garage/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCar)
    })
    const data = await response.json()
    CreateGarage()
    return data
}
export default UpdateCaraApi