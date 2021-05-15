import { newUserType } from './../types/types';
import Idb from "../indexed-DB"
import CreateEasy from './easy';

const DifficultyToggler = (ssn: string) => {
    Idb.getObj(ssn).then((res: newUserType) => {
        // easy medium hard
        CreateEasy(res)
    })
}
export default DifficultyToggler