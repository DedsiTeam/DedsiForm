import { IAttributeConfiguration, AttributeConfiguration } from '../../../formItems/public-api.ts'

// 输入框：属性配置
export interface IInputAttributeConfiguration extends IAttributeConfiguration {
    // 最大输入长度
    maximumInputLength: number
}

// 输入框：属性配置
export class InputAttributeConfiguration extends AttributeConfiguration implements IInputAttributeConfiguration {
    // 最大输入长度
    maximumInputLength: number = 0;
}