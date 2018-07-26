import { proxy } from '../handler';
import { CodeObj } from '@/code';
import { cardCreateInputDto, cardUpdateInputDto, cardActivateInputDto, cardDeleteInputDto } from './request';
import { cardCreateRes, cardUpdateRes, cardDeleteRes } from './response';
export const activateCard = function (data: cardActivateInputDto) {
    return proxy.post(`/mp/v1/card/activate`,data,{})
    .then((res: any) => {
        res.data as CodeObj<string>;
    });    
};

export const createCard = function (data: cardCreateInputDto) {
    return proxy.post(`/mp/v1/card`,data,{})
    .then((res: any) => res.data as CodeObj<cardCreateRes>);    
};


export const delCard = function (data: cardDeleteInputDto) {
    return proxy.delete(`/mp/v1/card`,{})
    .then((res: any) => res.data as CodeObj<cardDeleteRes>);    
};


export const updateCard = function (data: cardUpdateInputDto) {
    return proxy.put(`/mp/v1/card`,data,{})
    .then((res: any) => res.data as CodeObj<cardUpdateRes>);    
};