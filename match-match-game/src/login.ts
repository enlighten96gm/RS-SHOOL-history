type handlerType = (e: MouseEvent) => void
const Login = (): void => {
  const loginForm: HTMLElement = document.querySelector('.login');
  const navButtons: Array<HTMLElement> = Array.from(document.querySelectorAll('.nav__button'));
  const loginInputs: Array<HTMLInputElement> = Array.from(document.querySelectorAll('input'));
  const everyDot: Array<HTMLElement> = Array.from(document.querySelectorAll('.every__dot'));

  const toggleLoginWindow: handlerType = (e) => {
    const element = e.target as HTMLElement;
    if (element.className === 'third__block-header_text') {
      loginForm.classList.add('login__active_vision');
    }
    if (element.className === 'login login__active_vision') {
      loginForm.classList.remove('login__active_vision');
      loginInputs.forEach((input) => input.value = '');
      everyDot.forEach((dot) => dot.classList.remove('if__dot_active'));
    }
    if (element.className === 'login__submit_cancel') {
      loginForm.classList.remove('login__active_vision');
      loginInputs.forEach((input) => input.value = '');
      everyDot.forEach((dot) => dot.classList.remove('if__dot_active'));
    }
  };
  const buttonsHeandler: handlerType = (e) => {
    const element = e.target as HTMLElement;
    navButtons.forEach((button) => button.style.color = '#ff00a0');
    element.style.color = '#7a04eb';
  };
  navButtons.forEach((button) => { button.addEventListener('click', buttonsHeandler); });
  document.addEventListener('click', toggleLoginWindow);
};

export default Login;
