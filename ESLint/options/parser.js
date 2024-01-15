module.exports = {
  /** @解析器 */
  parser: "esprima",
  rules: {
    semi: "error",
  },

  /** 
   * @下列解析器与ESLint兼容 
   * Espree(default)
   * Esprima
   * @babel/eslint-parser - Babel 解析器的包装以便与 ESLint 兼容。
   * @typescript-eslint/parser - 将 TypeScript 转换为与 ESTree 格式兼容的解析器，好可以在 ESLint 中使用。
   * */
};
