import { App } from 'vue';

import { CoreUiComponents } from '../../core.ui/public-api.ts'
import { ElementPlusUiComponentName } from './elementPlusUiComponentName.ts'


export const DedsiElementPlusUi = {
    install(app: App) {
        console.log('vue version: ' + app.version)
        // 全局注入
        app.provide('UiComponentName', new ElementPlusUiComponentName());

        CoreUiComponents.forEach((component) => {
            app.use(component)
        })
    }
}