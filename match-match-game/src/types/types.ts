export type newUserType = {
    name: string
    surname: string
    email: string
    nameFlag: boolean
    surnameFlag: boolean
    emailFlag: boolean
    difculty: string
    cards: string
    ssn: string
}
export type gameType = {
    time: number,
    done: boolean,
    clicks: number,
    cardArray: Array<HTMLElement>,
    matchedCards: any
    checkCard: any
    goAhead: boolean
}
export type indexDbType = {
    DB_NAME: string
    DB_VERSION: number
    DB_STORE_NAME: string
    db: IDBDatabase | null
  
    openDb: any
    clearObjectStore: () => void
    getObj: (ssn: string) => any
    putObj: (newUser: newUserType) => void
  }