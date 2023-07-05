export function clipYValue(y: number, min: number, max: number) {
  return Math.min(Math.max(y, min), max);
}
