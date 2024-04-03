export interface RestClient {
    get: (url: string, params: any) => Promise<any>
}