import { url } from './instance';
const GetWinnerApi = async (id: string) => {
    let response = await fetch(`${url}/winners/${id}`, {
        method: 'GET',
    })
    let greeting = await response.json()
}
export default GetWinnerApi