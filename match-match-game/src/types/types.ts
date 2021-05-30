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
    data64: string
    score: number
}
export type gameType = {
    time: number,
    done: boolean,
    clicks: number,
    cardArray: Array<HTMLElement>,
    matchedCards: Array<HTMLElement>
    checkCard: null | HTMLElement
    goAhead: boolean
}
export type settingsType = {
    animals: string
    people: string
    question: string
    easy: string
    medium: string
    hard: string
}
export type indexDbType = {
    DB_NAME: string
    DB_VERSION: number
    DB_STORE_NAME: string
    db: IDBDatabase | null

    openDb: () => Promise<IDBDatabase>
    clearObjectStore: () => void
    getObj: (ssn: string) => Promise<newUserType>
    putObj: (newUser: newUserType) => void
    getLength: () => Promise<number>
  }
