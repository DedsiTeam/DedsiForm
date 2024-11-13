import { RadioFormItem } from '../../../core.js/public-api.ts';
import { Component, createVNode, Reactive } from 'vue';
import { ElRadio } from 'element-plus';

export class ElementPlusRadioFormItem extends RadioFormItem {
    // 创建 表单项 VNode
    createFormItemVNode(uiComponent: Component, formModel: Reactive<any>) {
        const props = this.createInputProps();
        return createVNode(
            uiComponent,
            {
                modelValue: formModel[this.dataKey],
                'onUpdate:modelValue': (newValue: any) => {
                    formModel[this.dataKey] = newValue;
                },
                ...props
            },
            () => this.attributeConfiguration.optionData.map((option: any) => createVNode(ElRadio, { value: option.value, label: option.label }))
        );
    }
}