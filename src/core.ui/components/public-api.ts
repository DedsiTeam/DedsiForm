export * from '../factory/uiComponentName.ts'
import { App } from 'vue'
import DedsiForm from './dedsiForm.ts'

function getComponent(component: any) {
  return {
    install(app: App) {
      app.component(component.name, component)
    }
  }
}

// 公开的组件
export const CoreUiComponents = [getComponent(DedsiForm)]
