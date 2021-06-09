export let pageCounter: number = 1
export class HowLargeMyGarage {
    public static a: any = ''
}
export const increaseCounterPage = () => {
    const newNumber = Math.round(HowLargeMyGarage.a / 7)
    if (pageCounter <= newNumber) {
        pageCounter += 1
    }
}
export const decreaseCounterPage = () => {
    if (pageCounter > 1) {
        pageCounter -= 1
    }
}