import { Try } from './../models/try.model'

export class AddTry {
    static readonly type = '[TRY] Add'

    constructor(public payload: Try) {

    }
}

export class RemoveTry {
    static readonly type = '[TRY] Remove'

    constructor(public payload: string) {

    }
}