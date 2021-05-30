import { newUserType } from './types/types';
import Idb from './indexed-DB';

const RebuildImages = (ssn: string): void => {
  const headerImageSmall: HTMLImageElement = document.querySelector('.header__upload_img');
  Idb.getObj(ssn).then((res: newUserType) => {
    const decoded = atob(res.data64);
    headerImageSmall.src = decoded;
    if (res.data64.length > 10) {
      headerImageSmall.classList.add('header__upload_img-visible');
    }
  });
};
export default RebuildImages;
