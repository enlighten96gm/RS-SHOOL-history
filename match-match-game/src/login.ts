type handlerType = (e: MouseEvent) => void
const Login = (): void => {
    const loginForm: HTMLElement  = document.querySelector('.login')
    const toggleLoginWindow: handlerType = (e) => {
        const element = e.target as HTMLElement
        if (element.className === "third__block-header_text") {
            loginForm.classList.add('login__active_vision')
        }
        if (element.className === "login login__active_vision") {
            loginForm.classList.remove('login__active_vision')
        }
        if (element.className === "login__submit_cancel") {
            loginForm.classList.remove('login__active_vision')
        } 
        // if (element.className) {
        //     element.classList.add('active_transfom__scale')
        // }
    }
    document.addEventListener('click', toggleLoginWindow)
}

export default Login;
