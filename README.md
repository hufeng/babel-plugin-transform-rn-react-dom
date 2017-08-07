# babel-plugin-transform-rn-react-dom

# Why?

在iflux2或者plume2的store.ts中，需要依赖unstable_batchedUpdates方法

该方法会解决react中父子组件级联渲染的问题

该方法默认在ReactDOM中提供，在app中react-native中已经暴露了此方法

所以提供该插件在app中，将react-dom自动替换为react-native


# Getting started

```sh
 yarn add babel-plugin-transform-rn-react-dom --dev
```

```javascript
  //.babelrc
  {
    "plugins": [
      "transform-rn-react-dom"
    ]
  }
```

