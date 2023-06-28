export interface RestClient {
    get: (url: string, options?: any) => Promise<any>
}