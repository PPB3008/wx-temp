import { proxy } from '../handler';
import { CodeObj } from '@/code';
export const getEvent = function (AppId) {
    return proxy.post(`/mp/v1/wx/event/${AppId}`,{})
    .then(response => response.data as CodeObj<string>);
}