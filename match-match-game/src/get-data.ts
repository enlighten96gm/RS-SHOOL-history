import { newUserType } from './types/types';
import Idb from './indexed-DB';
import Param from './param-component';

const GetData = (ssn: string): void => {
  Idb.getObj(ssn).then((res: newUserType) => Param(res));
};
export default GetData;
