import { randomBytes } from 'crypto';
  
export function generateHash(): string {
    const SALTSTRING = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
    const saltLength = SALTSTRING.length
    const HASH_LENGTH = 7
    const bytes = randomBytes(HASH_LENGTH);

    return Array.from(bytes, (byte) => SALTSTRING[  byte % saltLength]).join("")

}