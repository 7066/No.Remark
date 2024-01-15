module.exports = {
  /** @解析器选项 */
  parserOptions: {
    /**
     * @js版本
     * latest 表示最新版本
     * [3,5(default),6,7,8,9,10,11,12,13,14,15]
     * [3,5(default),2015,2016,2017,2018,2019,2020,2021,2022,2023,2024]
     */
    ecmaVersion: "latest",

    /**
     * @源类型
     * script(default),module(指ECMAScript)
     */
    sourceType: "module",

    /**
     * @你想使用哪些额外的语言特性的对象
     * 默认 false
     */
    ecmaFeatures: {
      globalReturn: true, // 允许全局范围内的 return 语句，
      impliedStrict: true, // 启用全局严格模式（如果 ecmaVersion 是 5 或更高版本）
      jsx: true,
    },

    // 允许使用保留字作为标识符（如果 ecmaVersion 为 3）
    allowReserved: true,
  },
};
