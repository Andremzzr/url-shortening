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
        const client = await this.connector.connect();
        
        try {
          await client.query('BEGIN');
          
          const checkResult = await client.query(
            'SELECT id FROM url WHERE hash = $1 LIMIT 1',
            [hash]
          );
          
          if (checkResult.rowCount > 0) {
            await client.query('COMMIT');
            return true;
          }
          
          const result = await client.query(
            'INSERT INTO url (original_url, hash) VALUES ($1, $2) RETURNING id',
            [goToURL, hash]
          );
          
          await client.query('COMMIT');
          
          return result.rowCount > 0;
        } catch (error) {
          await client.query('ROLLBACK');
          console.error('Database error in createURL:', error);
          throw new Error(`Failed to create URL: ${error.message}`);
        } finally {
          client.release();
        }
      }
    

    async getURL(hash: string): Promise<string | null> {
        try {
            const result: QueryResult = await this.connector.query(
                'SELECT original_url from url WHERE hash = $1',
                [hash]
              );
            
              if (result.rowCount === 0) {
                return null;
              }

              return result.rows[0].original_url;

        } catch (error) {
            throw new Error("Return ROW Error");

        }
    }
}


const databaseService = new PgsqlService(pool)

export default databaseService