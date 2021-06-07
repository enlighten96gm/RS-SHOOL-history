import PutCar from './dal/put-car';
import { carState } from './types/state';
const CreateCar = () => {
    const createNameINput: HTMLInputElement = document.querySelector('.first__input_block-input1')
    const createColorINput: HTMLInputElement = document.querySelector('.first__input_block-input2')
    const createCarButton: HTMLElement = document.querySelector('.first__input_block-button')
    const nameHeandler = (e: Event) => {
        const element = e.target as HTMLInputElement
        carState.name = element.value  
    }
    const colorHeandler = (e: Event) => {
        const element = e.target as HTMLInputElement
        carState.color = element.value  
    }
    const buttonHeanler = () => {
        createNameINput.value = ''
        createColorINput.value = '#000'
        PutCar()
    }
    createNameINput.addEventListener('change', nameHeandler)
    createColorINput.addEventListener('change', colorHeandler)
    createCarButton.addEventListener('click', buttonHeanler)
}
export default CreateCar