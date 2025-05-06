import { Pool } from 'pg';
import { DatabaseService } from '../interfaces/DatabaseService';

const pool = new Pool({
  user: 'user',
  password: 'pass',
  host: 'localhost',
  port: 5432,
  database: 'database'
});

export class PgsqlService implements DatabaseService {
    connector: Pool

    constructor(con: Pool) 
    {
        this.connector = con
    }
}