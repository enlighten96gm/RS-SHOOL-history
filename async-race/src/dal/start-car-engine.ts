import { url } from './instance';
const StartCarApi = async (id: string) => {
    let response = await fetch(`${url}/engine?id=${id}&status=started`, {
        method: 'GET'
    })
    let greeting = await response.json()
    return greeting
}
export default StartCarApi