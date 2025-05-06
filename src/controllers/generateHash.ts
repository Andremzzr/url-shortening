import { md5 } from 'js-md5';
  
export function generateHash(hashedString: string): string {
    return md5(hashedString)
}