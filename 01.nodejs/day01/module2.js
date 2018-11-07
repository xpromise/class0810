//三点运算符：将传入所有实参组合一个真数组
function sum(...args) {
  return args.reduce((previous, current) => previous + current, 0)
}

// [1, 2 ,3 ,4]

module.exports = sum;