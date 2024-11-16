import {
  IBasicConfiguration,
  BasicConfiguration,
  IAttributeConfiguration,
  AttributeConfiguration,
  IAdvancedConfiguration,
  AdvancedConfiguration,
  IVerificationConfiguration,
  VerificationConfiguration,
  IEventConfiguration,
  EventConfiguration,
  IStyleConfiguration,
  StyleConfiguration
} from './configurations/public-api.ts'

import { createVNode, VNode, Component, Reactive } from 'vue'

export enum FormItemRowSpan {
  // eslint-disable-next-line no-unused-vars
  TwentyFour = 24,
  // eslint-disable-next-line no-unused-vars
  Twelve = 12
}

export interface IFormItem {
  // 数据Id
  id: string
  // 数据字段值
  dataKey: string
  // 表单项名称
  formItemType: string
  // span
  rowSpan: number | FormItemRowSpan
  // 基础配置
  basicConfiguration: IBasicConfiguration
  // 属性配置
  attributeConfiguration: IAttributeConfiguration
  // 高级配置
  advancedConfiguration: IAdvancedConfiguration
  // 事件配置
  eventConfiguration: IEventConfiguration
  // 验证配置
  verificationConfiguration: IVerificationConfiguration
  // 样式配置
  styleConfiguration: IStyleConfiguration

  // 组件所需要的事件
  createInputEventProps(): Record<string, unknown>
  // 创建 输入组件需要到 props
  createInputComponentProps(): Record<string, unknown>
  // 创建 表单项 VNode
  // eslint-disable-next-line no-unused-vars
  inputComponentToVNode(uiComponent: Component, formModel: Reactive<any>): VNode | VNode[]
}

export abstract class FormItem implements IFormItem {
  // 数据Id
  id: string = ''
  // 数据字段值
  dataKey: string = ''
  // 表单项名称
  formItemType: string = ''
  // 一列几个
  rowSpan: number | FormItemRowSpan = FormItemRowSpan.Twelve
  // 基础配置
  basicConfiguration: IBasicConfiguration = new BasicConfiguration()
  // 属性配置
  attributeConfiguration: IAttributeConfiguration = new AttributeConfiguration()
  // 高级配置
  advancedConfiguration: IAdvancedConfiguration = new AdvancedConfiguration()
  // 验证配置
  verificationConfiguration: IVerificationConfiguration = new VerificationConfiguration()
  // 事件配置
  eventConfiguration: IEventConfiguration = new EventConfiguration()
  // 样式配置
  styleConfiguration: IStyleConfiguration = new StyleConfiguration()

  setBasicData(dataKey: string, labelName: string, placeholder: string) {
    this.dataKey = dataKey
    this.basicConfiguration.labelName = labelName
    this.attributeConfiguration.placeholder = placeholder
  }

  // 组件所需要的事件
  createInputEventProps(): Record<string, unknown> {
    return {
      ...this.eventConfiguration
    }
  }

  // 创建 输入组件需要到 props
  createInputComponentProps(): Record<string, unknown> {
    return {
      ...this.createInputEventProps()
    }
  }

  // 创建 表单项 VNode
  inputComponentToVNode(uiComponent: Component, formModel: Reactive<any>): VNode | VNode[] {
    const props = this.createInputComponentProps()
    return [
      createVNode(uiComponent, {
        modelValue: formModel[this.dataKey],
        'onUpdate:modelValue': (newValue: any) => {
          formModel[this.dataKey] = newValue
        },
        ...props
      })
    ]
  }
}
