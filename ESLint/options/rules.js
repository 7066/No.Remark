module.exports = {
  /**
   * @规则
   * 规则名称:[错误级别,规则设置] or 错误级别
   * "off" 或 0 - 关闭该规则
   * "warn" 或 1 - 启用并警告（不影响现有代码）
   * "error" 或 2 - 启用并报错（错误代码 1）
   */
  rules: {
    eqeqeq: "off",
    curly: "error",
    semi: ["error", "always"],
    quotes: ["error", "double"],
  },

  /** @JavaScript文件中配置规则 */
  // 可以在规则后使用两个及以上 - 来添加注释
  /* eslint eqeqeq: "off", curly: "error" -- why ? */
  /** @禁用警告 */
  /* eslint-disable */
  /* eslint-disable no-alert, no-console */
  /* eslint-disable-next-line */
  /* eslint-disable-next-line no-alert */
  // eslint-disable-next-line
  // eslint-disable-next-line no-alert
  /* eslint-disable-line */
  // eslint-disable-line
  // ...
  /** @开启警告 */
  /* eslint-enable */ // ps 没有列出任何特定的规则将导致所有被禁用的规则被重新启用
  /* eslint-enable no-alert, no-console */

  /** @配置插件规则 */
  plugins: ["plugin1"],
  rules: {
    "plugin1/rule1": "error",
  },
  /** @JavaScript文件中配置插件规则 */
  /* eslint "plugin1/rule1": "error" */
  // eslint-disable-line plugin1/rule1
  /* eslint-disable-line plugin1/rule1 */
};
