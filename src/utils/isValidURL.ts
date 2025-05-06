export function isValidURL(str: string): boolean {
    let url: URL;
  
    try {
      url = new URL(str);
    } catch (_) {
      return false;  
    }
    return url.protocol === "http:" || url.protocol === "https:";
}