import { proxy } from '../handler';
import { CodeObj } from '@/code';
import { cardActivateInputDto } from './request';
export const cardActivate = function (data: cardActivateInputDto) {
    return proxy.post(`/mp/v1/card/activate`,data,{})
    .then((res: any) => res.data as CodeObj<string>);    
};


export const addCard = function (data: cardActivateInputDto) {
    return proxy.post(`/mp/v1/card`,data,{})
    .then((res: any) => res.data as CodeObj<string>);    
};
