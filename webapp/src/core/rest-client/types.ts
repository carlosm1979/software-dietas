export interface RestClient {
    get: (url: string, params?: any, headers?: any) => Promise<any>
}