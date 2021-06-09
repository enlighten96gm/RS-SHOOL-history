import { url } from './instance';
const GetAllWiners = async () => {
    const response = await fetch(`${url}/winners`, {
        method: 'GET'
      })
      let greeting = await response.json()
      return greeting
}
export default GetAllWiners