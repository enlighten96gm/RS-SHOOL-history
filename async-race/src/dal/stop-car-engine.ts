import { url } from './instance';
const StopCarApi = async (id: string) => {
    let response = await fetch(`${url}/engine?id=${id}&status=stopped`, {
        method: 'GET'
    })
    let greeting = await response.json()
    return greeting
}
export default StopCarApi