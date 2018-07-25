import { proxy } from '../handler';
import { CodeObj } from '@/code';
export const oauthUrl = function () {
    return proxy.get(`/mp/v1/common/oauthurl`,{})
    .then((res: any) => res.data as CodeObj<string>);    
};


