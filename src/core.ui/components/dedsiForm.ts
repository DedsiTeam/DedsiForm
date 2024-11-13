import {defineComponent, inject, reactive, createVNode} from 'vue'

import { CoreNodeFactory } from '../public-api.ts'
import { IUiComponentName, UiComponentNameKey } from "../factory/uiComponentName.ts";

export default defineComponent({
    name: 'dedsi-form',
    props: {
        // 表单对象
        modelValue: Object,
        // 表单项
        formItems: { type: Array, default: () => [] },
        // 表单配置
        formOptions: Object,
    },
    setup(props){

        // 表单创建工厂
        const factory: CoreNodeFactory = new CoreNodeFactory();
        // 组件名称
        const uiComponentNames: IUiComponentName = inject<IUiComponentName>(UiComponentNameKey) as IUiComponentName;
        // 表单
        const formModel = reactive<any>(props.modelValue)

        // 表单配置
        const formProps = {
            model: formModel,
            ...props.formOptions
        };
        const FormComponent = factory.findUiComponent(uiComponentNames.Form);
        // 表单项
        const formItemElements = props.formItems.map((item: any) => factory.createFormItemVNode(uiComponentNames, item, formModel));
        // Row
        const RowComponent = factory.findUiComponent(uiComponentNames.Row);

        return () => createVNode(FormComponent,formProps, () => createVNode(RowComponent, {}, () => formItemElements))
    }
})