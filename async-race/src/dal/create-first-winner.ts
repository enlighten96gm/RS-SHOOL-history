import { newWinner } from './../types/winner-type';
import { url } from './instance';
const CreateFirstWinner = async (NewWinnerData: newWinner) => {
    let response = await fetch(`${url}/winners`, {
        method: 'POST',
        body: JSON.stringify(NewWinnerData),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    let greeting = await response.json()
}
export default CreateFirstWinner 