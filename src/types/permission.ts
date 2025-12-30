interface IOperations {
    add: boolean
    update: boolean
    deleted: boolean
    view: boolean
    all: boolean
}

export interface IPermissions {
    dashboard?: IOperations;
    profile?: IOperations;
    employee?: IOperations;
    purchase?: IOperations;
    sales?: IOperations;
}