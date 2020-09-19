## 安装

```shell
npx create-nx-workspace@latest
```

使用 oss 选项

```shell
npm install -D @nrwl/angular
```

### angular

安装 nx 的 angular 插件

```shell
nx generate @nrwl/angular:application --name=client --style=scss --linter=eslint --routing --strict --no-interactive --dry-run
```

- [--strict](https://angular.io/guide/strict-mode) angular 严格模式，更严格的代码编写，更小的体积

  ```json
  {
    "compilerOptions": {
      "strict": true // enable strict type checking
    },
    "angularCompilerOptions": {
      // Add strict template checks
      "strictInjectionParameters": true,
      "strictTemplates": true
    }
  }
  ```

- 删除 tslint 的相关包

  ```json
  (tslint, codelyzer)
  ```

- 使用 angluar.json 以配合 ng 命令行

  https://github.com/atowerlight/towerlight/commit/4de6fe02526c2afec7006b9b9c5224f08bcabc91

### nestjs

```shell
ng generate @nrwl/nest:application --name=api --frontendProject=client
```

#### tsconfig.base.json

```json
{
  // 给特定的编辑器让其在保存到时候 compile 新文件？
  "compileOnSave": false,
  // 编译器选项
  "compilerOptions": {
    // rootDirs 也就是说根目录可以有多个。 当你指定了多个根目录的时候， 不同根目录的文件可以像在一个目录下一样互相访问。
    // rootDir 和 rootDirs 的区别就是其只能指定一个。
    "rootDir": ".",
    // 生成 sourceMap 方便 debug
    "sourceMap": true,
    // 为每个 ts 文件生成 d.ts，多用于 npm 项目中
    "declaration": false,
    // 模仿 node 的模块解析方式
    "moduleResolution": "node",
    // 生成的代码中有装饰器的信息
    "emitDecoratorMetadata": true,
    // 装饰器支持
    "experimentalDecorators": true,
    // 将会从 tslib 库中引入帮助函数
    "importHelpers": true,
    // 生成代码的 target
    "target": "es2015",
    // 指定生成的代码的 模块 方式 esnext 为 es module 方式
    "module": "esnext",
    // 如果这个被指定了那么其他地方的 types 将不会被引入
    "typeRoots": ["node_modules/@types"],
    // 指定 ts 能所用的 lib 其实可以看成 ts 允许写那些东西
    "lib": ["es2017", "dom"],
    // 不对 node_modules 中的定义进行检查
    "skipLibCheck": true,
    // DEPRECATED. Use --skipLibCheck instead.
    // "skipDefaultLibCheck": true,
    // 当不写相对路径的时候从什么地方开始找模块
    "baseUrl": ".",
    // 模块的映射，是与 baseUrl 匹配起来的
    "paths": {}
  },
  "exclude": ["node_modules", "tmp"]
}
```
