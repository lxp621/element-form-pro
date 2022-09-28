const requireComponent = require.context('.', true, /\.vue$/)
export default {
  install: (app) => {
    requireComponent.keys().forEach(fileName => {
      const componentConfig = requireComponent(fileName)
      if (componentConfig.default.name) app.component(componentConfig.default.name, componentConfig.default || componentConfig)
    })
  }
}
