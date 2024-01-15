module.exports = {
  /** @例子 */
  rules: {
    "no-console": "error", // 全局禁止使用 console
  },
  /**
   * @覆盖
   * 针对指定文件，重新定义规则
   */
  overrides: [
    {
      // 重新定义规则的文件集合
      files: ["*-test.js", "src/module/*.js"],
      // 重新定义的规则
      rules: {
        "no-console": "off",
      },
    },
  ],
};
