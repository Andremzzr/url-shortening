import { Pool } from 'pg'

export interface DatabaseService {
    connector: Pool
    createURL(goToURL: string, hash: string): void
    getURL(hash: string): Promise<string | null>
}