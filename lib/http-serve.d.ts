/// <reference path="../types.d.ts" />
export interface IHttpServerOptions {
    /** 静态文件目录，默认是当前目录 */
    root?: string;
    /** 缓存时间 */
    cache?: number;
}
/** 对外暴露的方法 */
export interface IHttpServer {
    /** 启动服务 */
    listen(port: number): void;
    /** 关闭服务 */
    close(): void;
}
export default class HttpServer implements IHttpServer {
    private server;
    constructor(options: IHttpServerOptions);
    listen(port: number): void;
    close(): void;
}
