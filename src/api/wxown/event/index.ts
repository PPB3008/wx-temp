import { proxy } from '../handler';
import { CodeObj } from '@/code';
const getEvent = function () {
    return proxy.get(`/mp/v1/wx/event`,{})
    .then(response => response.data as CodeObj<string>);
}