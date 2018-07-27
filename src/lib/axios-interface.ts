import { AxiosRequestConfig, AxiosResponse, AxiosPromise, AxiosInstance } from 'axios';
import { Md5 } from 'md5-typescript';
import URI from 'urijs';
export const SignData = {
    AppId: '110',
    SecuretyKey: 'MK.ApiKey',
}


const Interface = {
    InterfaceBefore (config: AxiosRequestConfig) {
        const url = config.url || '';
        const newUrl = URI(url);
        newUrl.setQuery({
          region: [0,0,0].join(','),
        }); 
        config.url = newUrl.resource();
        const Ts = Math.ceil(Date.now());
        const AppId = parseInt(SignData.AppId);
        const params = Object.assign({},{
            Ts,
            AppId,
        });
        // const BrandId = 
        const Organize = '0,0,0'
        const Sign = getSignature(params);
        // let Source = 0;
        // let BrandId = 
        config.headers = Object.assign(config.headers || {},{ Ts, AppId, Sign, Organize, Source: 0 });
        console.log(config);
        return config;
    },
    InterfaceAfter (config) {
        // ...logic
        return config;
    }
}

function getSignature (params): string {
    let sortedKeys:Array<string> = [];
    const keys = Object.keys(params);
    keys.sort().forEach(ele => {
        sortedKeys.push(`${ele}=${params[ele]}`);
    })
    sortedKeys.push(SignData.SecuretyKey);
    return Md5.init(sortedKeys.join('&'));
}


export default Interface;