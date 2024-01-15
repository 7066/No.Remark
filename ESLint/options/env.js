module.exports = {
  /**
   * @语言环境
   * 这些环境并不互斥，所以你可以一次定义多个环境。
   */
  env: {
    browser: true /**           */ /**  浏览器全局变量。 */,
    node: true /**              */ /**  Node.js 的全局变量和 Node.js 的范围。 */,
    commonjs: true /**          */ /**  CommonJS 全局变量和 CommonJS 范围（用于使用 Browserify/WebPack 的纯浏览器代码）。 */,
    sharednodebrowser: true /** */ /**  Node.js 和浏览器共同的全局变量。 */,
    es6: true /**               */ /**  启用除模块之外的所有 ECMAScript 6 功能（这会自动将解析器设置为 6）。 */,
    es2016: true /**            */ /**  添加所有 ECMAScript 2016 的全局变量，并自动将解析器选项 ecmaVersion 设置为 7。 */,
    es2017: true /**            */ /**  添加所有 ECMAScript 2017 的全局变量，并自动将解析器选项 ecmaVersion 设置为 8。 */,
    es2018: true /**            */ /**  添加所有 ECMAScript 2018 的全局变量，并自动将解析器选项 ecmaVersion 设置为 9。 */,
    es2019: true /**            */ /**  添加所有 ECMAScript 2019 的全局变量，并自动将解析器选项 ecmaVersion 设置为 10。 */,
    es2020: true /**            */ /**  添加所有 ECMAScript 2020 的全局变量，并自动将解析器选项 ecmaVersion 设置为 11。 */,
    es2021: true /**            */ /**  添加所有 ECMAScript 2021 的全局变量，并自动将解析器选项 ecmaVersion 设置为 12。 */,
    es2022: true /**            */ /**  添加所有 ECMAScript 2022 的全局变量，并自动将解析器选项 ecmaVersion 设置为 13。 */,
    es2023: true /**            */ /**  添加所有 ECMAScript 2023 的全局变量，并自动将解析器选项 ecmaVersion 设置为 14。 */,
    es2024: true /**            */ /**  添加所有 ECMAScript 2024 的全局变量，并自动将解析器选项 ecmaVersion 设置为 15。 */,
    worker: true /**            */ /**  网络工作者全局变量。 */,
    amd: true /**               */ /**  根据 amd 规范，将 require() 和 define() 定义为全局变量。 */,
    mocha: true /**             */ /**  添加所有 Mocha 测试的全局变量。 */,
    jasmine: true /**           */ /**  添加 1.3 和 2.0 版本的所有 Jasmine 测试全局变量。 */,
    jest: true /**              */ /**  Jest 全局变量。 */,
    phantomjs: true /**         */ /**  PhantomJS 全局变量。 */,
    protractor: true /**        */ /**  Protractor 全局变量。 */,
    qunit: true /**             */ /**  QUnit 全局变量。 */,
    jquery: true /**            */ /**  jQuery 全局变量。 */,
    prototypejs: true /**       */ /**  Prototype.js 全局变量。 */,
    shelljs: true /**           */ /**  ShellJS 全局变量。 */,
    meteor: true /**            */ /**  Meteor 全局变量。 */,
    mongo: true /**             */ /**  MongoDB 全局变量。 */,
    applescript: true /**       */ /**  AppleScript 全局变量。 */,
    nashorn: true /**           */ /**  Java 8 Nashorn 全局变量。 */,
    serviceworker: true /**     */ /**  Service Worker 全局变量。 */,
    atomtest: true /**          */ /**  Atom 测试帮助器全局变量。 */,
    embertest: true /**         */ /**  Ember 测试助手的全局变量*/,
    webextensions: true /**     */ /**  WebExtensions 全局变量。 */,
    greasemonkey: true /**      */ /**  GreaseMonkey 全局变量。 */,
  },

  /** @使用插件中的环境 */
  plugins: ["example"],
  env: {
    "example/custom": true,
  },

  /** @JavaScript文件中指定环境 */
  /* eslint-env node, mocha */
};
