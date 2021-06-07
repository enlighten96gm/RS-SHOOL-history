import DeleteCarFromApi from "../dal/delete-api-car"

const DeleteCar = () => {
    const deleteButton: Array<HTMLElement> = Array.from(document.querySelectorAll('.car__trace_button2'))
    deleteButton.forEach((item: HTMLElement) => {
        const deleteCarHeandler = (e: Event) => {
            const element = e.target as HTMLElement
            DeleteCarFromApi(element.id)
        }
        item.addEventListener('click', deleteCarHeandler)
    })
}
export default DeleteCar