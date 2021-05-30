import { indexDbType } from './types/types';

const Idb: indexDbType = {
  DB_NAME: 'enlighten-96-gm',
  DB_VERSION: 1,
  DB_STORE_NAME: 'users',
  db: null,

  openDb() {
    return new Promise((res, rej) => {
      const request = indexedDB.open(Idb.DB_NAME, Idb.DB_VERSION);
      request.onsuccess = () => {
        Idb.db = request.result;
        res(Idb.db);
      };
      request.onerror = () => {
        rej(this.error);
      };
      request.onupgradeneeded = (event: Event) => {
        const myDB: IDBDatabase = (event.target as IDBRequest).result;
        if (!myDB.objectStoreNames.contains(Idb.DB_STORE_NAME)) {
          myDB.createObjectStore(Idb.DB_STORE_NAME, { keyPath: 'ssn' });
        }
        res(Idb.db);
      };
    });
  },
  clearObjectStore() {
    Idb.openDb().then((db) => new Promise((res, rej) => {
      const transaction = db.transaction(Idb.DB_STORE_NAME, 'readwrite');
      const objectStore = transaction.objectStore(Idb.DB_STORE_NAME);
      const request = objectStore.clear();
      request.onsuccess = () => {
        res(objectStore);
      };
      request.onerror = () => {
        rej(this.error);
      };
    }));
  },
  getObj(ssn) {
    return Idb.openDb().then((db) => new Promise((res, rej) => {
      const transaction = db.transaction(Idb.DB_STORE_NAME, 'readonly');
      const objectStore = transaction.objectStore(Idb.DB_STORE_NAME);
      const request = objectStore.get(ssn);
      request.onsuccess = () => res(request.result);
      request.onerror = (event: ErrorEvent) => {
        rej(event);
      };
    }));
  },
  getLength() {
    return Idb.openDb().then((db) => new Promise((res) => {
      const transaction = db.transaction(Idb.DB_STORE_NAME, 'readwrite');
      const objectStore = transaction.objectStore(Idb.DB_STORE_NAME);
      const count = objectStore.count();
      count.onsuccess = () => {
        res(count.result);
      };
    }));
  },
  putObj(newUser) {
    Idb.openDb().then((db) => new Promise((res, rej) => {
      const transaction = db.transaction(Idb.DB_STORE_NAME, 'readwrite');
      const objectStore = transaction.objectStore(Idb.DB_STORE_NAME);
      const request = objectStore.put(newUser);
      request.onsuccess = (event: Event) => {
        res((event.target as IDBRequest).result);
      };
      request.onerror = (event: ErrorEvent) => {
        rej(event.error);
      };
    }));
  },
};
export default Idb;
