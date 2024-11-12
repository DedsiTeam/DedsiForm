import {defineComponent, inject, reactive, createVNode} from 'vue'

import { CoreNodeFactory } from '../public-api.ts'
import { IUiComponentName, UiComponentNameKey } from "../factory/uiComponentName.ts";

export default defineComponent({
    name: 'dedsi-form',
    props: {
        modelValue: Object,
        formItems: { type: Array, default: () => [] }
    },
    setup(props){

        // 表单创建工厂
        const factory: CoreNodeFactory = new CoreNodeFactory();
        // 组件名称
        const uiComponentNames: IUiComponentName = inject<IUiComponentName>(UiComponentNameKey) as IUiComponentName;
        // 表单
        const formModel = reactive<any>(props.modelValue)

        const formProps = {
            model: formModel
        }
        const FormComponent = factory.findUiComponent(uiComponentNames.Form);

        // 表单项
        const formItemElements = props.formItems.map((item: any) => factory.createFormItemVNode(uiComponentNames, item, formModel));
        // Row
        const RowComponent = factory.findUiComponent(uiComponentNames.Row);

        return () => createVNode(FormComponent,formProps, () => createVNode(RowComponent, {}, () => formItemElements))
    }
})