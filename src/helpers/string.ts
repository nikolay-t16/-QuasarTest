export function strToPrice(str: string | number): string {
  return str.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
}
