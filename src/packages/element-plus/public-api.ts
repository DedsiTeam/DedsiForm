import { App } from 'vue';
import { CoreUiComponents, UiComponentNameKey } from '../../core.ui/public-api.ts'
import { ElementPlusUiComponentName } from './elementPlusUiComponentName.ts'

export * from './elementPlusUiComponentName.ts'
export * from './formItemComponents/public-api.ts'

export const DedsiElementPlusUi = {
    install(app: App) {
        console.log('vue version: ' + app.version)
        // 全局注入
        app.provide(UiComponentNameKey, new ElementPlusUiComponentName());

        CoreUiComponents.forEach((component) => {
            app.use(component)
        })
    }
}

