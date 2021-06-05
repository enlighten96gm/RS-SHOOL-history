const CreateGarage = (data: any) => {
    const garageMain: HTMLElement = document.querySelector('.garage__block')
    const carsCount: number = data.length
    const viewCars = data.map((item: any) => {
        return `
    <div class="car__trace">
        <div class="car__trace_inside">
            <div class="car__trace_button1">SELECT</div>
            <div class="car__trace_button2">REMOVE</div>
            <div class="car__trace_text">${item.name}</div>
        </div>
        <div class="car__trace_engine">
            <div class="car__trace_engine-1">A</div>
            <div class="car__trace_engine-2">B</div>
        </div>
        <div class="car__main"></div>
        <div class="car__underline"></div>
    </div>`
    })
    garageMain.innerHTML = `
    <div class="garge__inside_main">GARAGE (${carsCount})</div>
    <div class="pagination">Page #</div>
    ${viewCars}
    `
    
}
export default CreateGarage