import { proxy } from '../handler';
import { CodeObj } from '@/code';
import { oauthRes, oauthUrlRes } from './response';
export const oauthUrl = function () {
    return proxy.get(`/mp/v1/common/oauthurl`,{})
    .then((res: any) => res.data as CodeObj<string>);    
};


export const oauth = function () {
    return proxy.get(`/mp/v1/common/oauth`,{})
    .then((res: any) => res.data as CodeObj<oauthRes>);    
};

