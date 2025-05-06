import { Pool } from 'pg'

export interface DatabaseService {
    con: Pool
    createURL(goToURL: string): Promise<boolean>
    getURL(hash: string): Promise<string>
}