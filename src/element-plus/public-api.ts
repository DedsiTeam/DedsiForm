import { App } from 'vue'
import { CoreUiComponents, UiComponentNameKey, NodeFactoryNameKey } from '../core.ui/public-api.ts'
import { ElementPlusUiComponentName } from './elementPlusUiComponentName.ts'
import { ElementPlusCoreNodeFactory } from './factory/elementPlusCoreNodeFactory.ts'

export * from './elementPlusUiComponentName.ts'
export * from './formItemComponents/public-api.ts'
export * from './factory/public-api.ts'

export const DedsiElementPlusUi = {
  install(app: App) {
    // 全局注入
    app.provide(UiComponentNameKey, new ElementPlusUiComponentName())
    app.provide(NodeFactoryNameKey, new ElementPlusCoreNodeFactory())

    CoreUiComponents.forEach((component) => {
      app.use(component)
    })
  }
}
