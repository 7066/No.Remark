module.exports = {
  /** @全局变量 */
  globals: {
    var1: "writable", // 可写 true, writeable 等同于 writable
    var2: "readonly", // 只读 false, readable 等同于 readonly
    var3: "off", // 禁用
  },

  /** @JavaScript文件中指定全局变量 */
  /* global var1:writable, var2:readonly */
};
