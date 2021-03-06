# http-server-ts

利用 TypeScript 生态中的各种工具和特性，开发一个简单静态文件服务 NPM 模块。

## 总结

- export 导出模块内的所有必要的类型定义，可以帮助我们减少 ts(4023) 错误。
- 我们可以开启 importHelpers 配置，公用 tslib 替代内联 import 等相关 polyfill 代码，从而大大减小生成代码的体积，配置示例如下：

```json
{
  "extends": "./tsconfig.json",

  "compilerOptions": {
    "importHelpers": true
  },

  "exclude": ["__tests__", "lib"]
}
```

- 确保 tsconfig.test.json 和 tsconfig.prod.json 中代码转译相关的配置尽可能一致，避免逻辑虽然通过了单测，但是构建之后运行提示错误。
- 慎用 `import * as ModuleName`，因为较低版本的 tslib 实现的 `__importStar` 补丁有 bug。如果模块 export 是类的实例，经 `__importStar` 处理后，会造成实例方法丢失。另外一个建议是避免直接 export 一个类的实例。
- 推荐使用完全支持 TypeScript 的 NestJS 框架开发企业级 Node.js 服务端应用。
