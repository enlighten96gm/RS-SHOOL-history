export let pageCounter = 1; // eslint-disable-line import/no-mutable-exports
export class HowLargeMyGarage {
    public static a = 0
}
export const increaseCounterPage = () => {
  const newNumber = Math.round(HowLargeMyGarage.a / 7);
  if (pageCounter <= newNumber) {
    pageCounter += 1;
  }
};
export const decreaseCounterPage = () => {
  if (pageCounter > 1) {
    pageCounter -= 1;
  }
};
