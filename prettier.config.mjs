/** @type {import("prettier").Config} */
const config = {
  // 是否使用tab键缩进
  useTabs: false,
  // tab缩进
  tabWidth: 2,
  // 每行最大的列数
  printWidth: 120,
  // jsx中是否使用单引号
  jsxSingleQuote: true,
  // 是否使用单引号
  singleQuote: true,
  // 对象中是否是有空格
  bracketSpacing: true,
  // 行尾是否有分号
  semi: true,
  // 在对象，数组等中最后一个元素的后面，是否添加逗号
  trailingComma: 'none',
  // 箭头函数，参数只有一个时，是否保留括号
  arrowParens: 'avoid'
};
export default config;
