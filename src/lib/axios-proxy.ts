import axios, { AxiosRequestConfig, AxiosResponse, AxiosPromise, AxiosInstance } from 'axios';
import Interface from './axios-interface';
import Code, { CodeObj } from '../code';
const axiosConfig = {
    headers: {},
    timeout: 6000,
}

function beforeRequest (request: AxiosRequestConfig) {
    return Interface.InterfaceBefore(request);
}

function catchError (error: any) {
    let revert = 0;
    if (error.response) {
      revert = error.response.status;
    } else if (error.request) {
      revert = Code.REJECT;
    } else {
      revert = Code.ERROR;
    }
    if (process.env.NODE_ENV === 'development') {
    //   debug(error.message);
    }
    return Promise.resolve({ data: new CodeObj(revert) });
}



function ownProxy (baseURL: string) {
    const proxy = axios.create(Object.assign({ baseURL },axiosConfig));
    proxy.interceptors.request.use(beforeRequest,catchError);
    return proxy;
}

export default ownProxy;