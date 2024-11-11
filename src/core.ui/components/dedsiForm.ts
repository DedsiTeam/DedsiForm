import { defineComponent, createVNode, inject } from 'vue'

import { formFactory } from '../factory/formFactory.ts'
import { IUiComponentName } from "../factory/uiComponentName.ts";

export default defineComponent({
    name: 'dedsi-form',
    setup() {
        const uiComponentNames: IUiComponentName = inject<IUiComponentName>('UiComponentName') as IUiComponentName;

        const dedsiForm = formFactory(uiComponentNames.Form)

        return () => createVNode(dedsiForm);
    }
})