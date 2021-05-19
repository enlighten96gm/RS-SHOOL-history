import Idb from './indexed-DB'
import GetData from './get-data';
import state from './types/state';
import RebuildImages from './rebuild-images';
type handlerType = (e: MouseEvent) => void

let AddUser = (): void => {
    const addButton: HTMLElement = document.querySelector('.login__submit_label');
    const inactiveButton: HTMLLIElement = document.querySelector('.login__submit_label');
    const loginInputs: Array<HTMLElement> = Array.from(document.querySelectorAll('input'));
    const everyDot: Array<HTMLElement> = Array.from(document.querySelectorAll('.every__dot'));
    const nameInput: HTMLInputElement = document.querySelector('.first__segment_login__name_2');
    const emailInput: HTMLInputElement = document.querySelector('.first__segment_login__email_2');
    const surnameInput: HTMLInputElement = document.querySelector('.first__segment_login__password_2');
    // window.indexedDB.deleteDatabase("enlighten-96-gm");
    const regex1 = /^[a-zA-Zа-яА-я]+$/;
    const regex2 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let {nameFlag, surnameFlag, emailFlag} = state

const loginUser: handlerType = (e) => {
    if (nameFlag && surnameFlag && emailFlag) {
        e.preventDefault()
        Idb.openDb().then
        Idb.putObj(state)
        setTimeout(() => {GetData(state.ssn)}, 100)
        setTimeout(() => {RebuildImages(state.ssn)}, 100)
        state.ssn = state.ssn + '1'
        nameInput.value = ''
        surnameInput.value = ''
        emailInput.value = ''
        everyDot.forEach((item): void => {
            item.classList.remove('if__dot_active')
        })
    }
}
const fillState: handlerType = (e) => {
    const element = e.target as HTMLInputElement
    switch (element) {
        case nameInput:
            nameFlag = false
            everyDot[0].classList.remove('if__dot_active')
            if (element.value.match(regex1) !== null) {
                state.name = element.value
                everyDot[0].classList.add('if__dot_active')
                nameFlag = true
            }
        break;
        case surnameInput: 
            surnameFlag = false
            everyDot[1].classList.remove('if__dot_active')
            if (element.value.match(regex1) !== null) {
                state.surname = element.value
                everyDot[1].classList.add('if__dot_active')
                surnameFlag = true
            }
        break;
        case emailInput:
            emailFlag = false
            everyDot[2].classList.remove('if__dot_active')
            if (element.value.match(regex2) !== null) {
                state.email = element.value
                everyDot[2].classList.add('if__dot_active')
                emailFlag = true
            }
        default:
        break;
    }
    inactiveButton.classList.remove('if__dot_active')
    if (nameFlag && surnameFlag && emailFlag) {
        inactiveButton.classList.add('if__dot_active')
    }
}

loginInputs.forEach((input): void => {
    input.addEventListener('keyup', fillState)
})
addButton.addEventListener('click', loginUser)
}

export default AddUser