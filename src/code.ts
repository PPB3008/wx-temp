enum Code {
    ERROR = 1, // 异常
    SUCCESS = 200, // 成功。
    SESSION_ERROR = -100001, // session异常
    UNDEFINED_URL = 404, // 404，未定义的url
    TIME_OUT = 408,
    REJECT = 500,
    GATEWAY_REJECT = 504,
    QR_NO_WATCH_EVENT = 810000, // 客户端未监听事件时，APP调用事件
    ROUTE_CHANGE = 830000, // 客户端路由变化导致的异常，比如弹窗被迫关闭。
    ERROR_CODE_BASE = 2100000, // 用户中心loginnext返回特殊状态码（尚未登录）
    // 100020获取错误。没找到会员信息
    // 100600米客顾客调用失败。没找到顾客信息
    // 100100米客会员产品权限未开
}

export interface CodeParams<T> {
    Code?: number;
    Data: T;
    Msg?: string;
    Ts?: number;
  }

export class CodeObj<T> {
    public Code: number;
    public Msg: string;
    public Data: null | T;
    public Ts: number;
  
    constructor (params: number | CodeParams<T>) {
      if (typeof params === 'number') {
        this.Code = params;
        this.Msg = '';
        this.Data = null;
        this.Ts = Date.now();
        return;
      }
  
      // 避免 Code 为 0 时，丢失 Code
      if (params.Code === 0 || params.Code) {
        this.Code = params.Code;
      } else {
        this.Code = Code.SUCCESS;
      }
  
      this.Data = params.Data;
  
      if ('Msg' in params) {
        this.Msg = params.Msg || ''; // (|| '') 为了避免 tslint 提示错误。
      } else {
        this.Msg = '';
      }
  
      if ('Ts' in params) {
        this.Ts = params.Ts || 0; // (|| 0) 为了避免 tslint 提示错误。
      } else {
        this.Ts = Date.now();
      }
    }
  
    toQuery () {
      return {
        Code: String(this.Code),
        Msg: String(this.Msg),
        Ts: String(this.Ts),
      };
    }
  }
  
  

export default Code;