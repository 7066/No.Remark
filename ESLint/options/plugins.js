module.exports = {
  /** 
   * @插件 
   * eslint-plugin- 可忽略
   * */
  plugins: [
    "a-plugin",
    /** @非范围包 */
    "jquery", // eslint-plugin-jquery
    /** @范围包 */
    "@foo/foo", // @foo/eslint-plugin-foo
    "@bar", // @bar/eslint-plugin
  ],
  
  /** @指定处理器 */
  // processor: "a-plugin/a-processor",

  /** @为特定文件指定处理器 */
  overrides: [
    {
      files: ["*.md"],
      processor: "a-plugin/markdown",
    },
  ],
};
