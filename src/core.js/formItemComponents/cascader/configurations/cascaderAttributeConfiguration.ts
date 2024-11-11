import { IAttributeConfiguration, AttributeConfiguration } from '../../../formItems/public-api.ts'

// 级联选择：属性配置
export interface ICascaderAttributeConfiguration extends IAttributeConfiguration {
    // 选项数据: 静态数据
    optionData: any[];
    // 是否多选
    isMultiple: boolean;
    // 输入框中是否显示选中值的完整路径
    isShowCompletePath: boolean;
    // 选项分隔符
    optionSeparator: string;
}

// 级联选择：属性配置
export class CascaderAttributeConfiguration extends AttributeConfiguration implements ICascaderAttributeConfiguration {
    // 选项数据: 静态数据
    optionData: any[] = [];
    // 是否多选
    isMultiple: boolean = false;
    // 输入框中是否显示选中值的完整路径
    isShowCompletePath: boolean = false;
    // 选项分隔符
    optionSeparator: string = '';
}