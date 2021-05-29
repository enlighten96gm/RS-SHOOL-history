import { newUserType } from './types/types';
import Idb from './indexed-DB';
import Param from './param-component';

const GetData = (ssn: string) => {
  Idb.getObj(ssn).then((res: newUserType): any => Param(res));
};
export default GetData;
