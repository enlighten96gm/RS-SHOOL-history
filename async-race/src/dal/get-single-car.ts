import { url } from './instance';
const GetSingleCar = async (id: string) => {
    let response = await fetch(`${url}/garage/${id}`, {
        method: 'GET',
    })
    let data = await response.json()
    return data
}
export default GetSingleCar