import { url } from './instance';
const DeleteFromWinners = async (id: string) => {
    let response = await fetch(`${url}/winners/${id}`, {
        method: 'DELETE',
    })
    let greeting = await response.json()
    return greeting
}
export default DeleteFromWinners