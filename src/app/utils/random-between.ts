export function randomBetween(from: number, to: number): number {
  return Math.random() * (to - from) + from;
}

export function intRandomBetween(from: number, to: number): number {
  return Math.round(randomBetween(from, to));
}
