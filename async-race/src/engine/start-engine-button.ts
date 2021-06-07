import StartCarApi from "../dal/start-car-engine"

const StartButton = () => {
    const startEngine: Array<HTMLElement> = Array.from(document.querySelectorAll('.car__trace_engine-1'))
    startEngine.forEach((item: HTMLElement) => {
        const startButtonHeandler = (e: Event) => {
            const element = e.target as HTMLElement
            StartCarApi(element.id).then((item: any) => {
                console.log(item);
                
            })
        }
        item.addEventListener('click', startButtonHeandler)
    })
}
export default StartButton