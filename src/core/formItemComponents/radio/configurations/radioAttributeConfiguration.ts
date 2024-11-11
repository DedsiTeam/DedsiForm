import { IAttributeConfiguration, AttributeConfiguration } from '../../../formItems/public-api.ts'

// 输入框：属性配置
export interface IRadioAttributeConfiguration extends IAttributeConfiguration {
    // 选项数据: 静态数据
    optionData: any[];
    // 按钮形式
    isButton: boolean;
}

// 输入框：属性配置
export class RadioAttributeConfiguration extends AttributeConfiguration implements IRadioAttributeConfiguration {
    // 选项数据: 静态数据
    optionData: any[] = [];
    // 按钮形式
    isButton: boolean = false;
}