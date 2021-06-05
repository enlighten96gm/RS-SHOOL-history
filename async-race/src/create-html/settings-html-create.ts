const CreateSettings = () => {
    const ARBody: HTMLElement = document.querySelector('body')
    ARBody.innerHTML = `
<div class="button__block">
    <div class="garage__button">TO GARAGE</div>
    <div class="winners__button">TO WINNERS</div>
</div>
<div class="input__block">
    <div class="first__input_block">
        <input class="first__input_block-input1" type="text">
        <input class="first__input_block-input2" type="color">
        <div class="first__input_block-button">CREATE</div>
    </div>
    <div class="second__input_block">
        <input class="second__input_block-input1" type="text">
        <input class="second__input_block-input2" type="color">
        <div class="second__input_block-button">UPDATE</div>
    </div>
</div>
<div class="buttons__block">
    <div class="buttons__block_1">RACE</div>
    <div class="buttons__block_2">RESET</div>
    <div class="buttons__block_3">GENERATE CARS</div>
</div>
<div class="garage__block"></div>
`
}
export default CreateSettings