export interface cardCreateRes {
    CardId: string,
    ErrCode: number,
    ErrMsg: string,
}

export interface cardUpdateRes {
    ErrCode: number,
    ErrMsg: string,
    SendCheck: boolean,
}


export interface cardDeleteRes {
    ErrCode: number,
    ErrMsg: string,
}
