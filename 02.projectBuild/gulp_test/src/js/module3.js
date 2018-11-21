
//分别暴露
export function sum(...args) {
  return args.reduce((prev, curr) => prev + curr, 0);
}