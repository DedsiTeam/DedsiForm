import {
    IBasicConfiguration, BasicConfiguration,
    IAttributeConfiguration, AttributeConfiguration,
    IVerificationConfiguration, VerificationConfiguration
} from './configurations/public-api.ts'

import {createVNode, VNode, Component, Reactive } from 'vue'

export interface IFormItem {
    // 数据Id
    id: string;
    // 数据字段值
    dataKey: string;
    // 表单项名称
    formItemType: string;
    // 一列几个
    rowSpan: number;

    // 基础配置
    basicConfiguration:IBasicConfiguration;
    // 属性配置
    attributeConfiguration: IAttributeConfiguration;
    // 验证配置
    verificationConfiguration: IVerificationConfiguration;

    // 创建 输入组件需要到 props
    createInputComponentProps(): Record<string, unknown>;
    // 创建 表单项 VNode
    createFormItemVNode(uiComponent: Component, formModel: Reactive<any>): VNode;
}

export abstract class FormItem implements IFormItem {
    // 数据Id
    id: string = '';
    // 数据字段值
    dataKey: string = '';
    // 表单项名称
    formItemType: string = '';
    // 一列几个
    rowSpan: number = 12;

    // 基础配置
    basicConfiguration:IBasicConfiguration = new BasicConfiguration();
    // 属性配置
    attributeConfiguration: IAttributeConfiguration = new AttributeConfiguration();
    // 验证配置
    verificationConfiguration: IVerificationConfiguration = new VerificationConfiguration();

    // 创建 输入组件需要到 props
    createInputComponentProps(): Record<string, unknown> {
        return {
            placeholder: this.attributeConfiguration.placeholder,
            disabled: this.attributeConfiguration.isDisable,
            readonly: this.attributeConfiguration.isReadOnly,
            clearable: this.attributeConfiguration.isClear
        }
    }

    // 创建 表单项 VNode
    createFormItemVNode(uiComponent: Component, formModel: Reactive<any>) {
        const props = this.createInputComponentProps();
        return createVNode(uiComponent, {
            modelValue: formModel[this.dataKey],
            'onUpdate:modelValue': (newValue: any) => {
                formModel[this.dataKey] = newValue;
            },
            ...props
        })
    }
}