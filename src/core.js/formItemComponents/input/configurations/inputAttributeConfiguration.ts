import { IAttributeConfiguration, AttributeConfiguration } from '../../../formItems/public-api.ts'

// 输入框：属性配置
export interface IInputAttributeConfiguration extends IAttributeConfiguration {
  // 最大输入长度
  maximumInputLength?: number
  // input type
  type: string
  // 输入框行数，仅 type 为 'textarea' 时有效
  rows: number
}

// 输入框：属性配置
export class InputAttributeConfiguration extends AttributeConfiguration implements IInputAttributeConfiguration {
  // 最大输入长度
  maximumInputLength?: number = undefined
  // input type
  type: string = ''
  // 输入框行数，仅 type 为 'textarea' 时有效
  rows: number = 2
}
