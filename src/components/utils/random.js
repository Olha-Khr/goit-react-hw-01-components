export function random() {
  const color = Math.floor(Math.random() * 16777214).toString(16);
  return `#${color}50`;
}
