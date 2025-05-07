import { Pool, QueryResult } from 'pg';
import { DatabaseService } from '../interfaces/DatabaseService';

const pool = new Pool({
  user: 'user',
  password: 'pass',
  host: 'localhost',
  port: 5432,
  database: 'database'
});

export class PgsqlService implements DatabaseService {
    private connector: Pool

    constructor(con: Pool) 
    {
        this.connector = con
    }

      
    async createURL(goToURL: string, hash: string): Promise<boolean> {
        try {
            const result = await this.connector.query(
                'INSERT INTO url (original_url, hash) VALUES ($1, $2) RETURNING id',
                [goToURL, hash]
              );
            
              return result.rowCount > 0;
            
        } catch (error) {
            throw new Error("Create ROW Error");
        }
    }

    async getURL(hash: string): Promise<string | null> {
        try {
            const result: QueryResult = await this.connector.query(
                'SELECT original_url from url WHERE hash = $1',
                [hash]
              );
            
            return result.rows[0]["original_url"]

        } catch (error) {
            throw new Error("Return ROW Error");

        }
    }
}


const databaseService = new PgsqlService(pool)

export default databaseService