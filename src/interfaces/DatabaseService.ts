export interface DatabaseService {
    createURL(goToURL: string, hash: string): void
    getURL(hash: string): Promise<string | null>
}