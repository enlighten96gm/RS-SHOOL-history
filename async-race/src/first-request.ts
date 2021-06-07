import { url } from './dal/instance';

const FirstCreate = async () => {
    const response = await fetch(`${url}/garage`, {
        method: 'GET'
    })
    const data = await response.json()
    return data
}
export default FirstCreate