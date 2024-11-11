// 属性配置
export interface IAttributeConfiguration {
    //是否禁用
    isDisable: boolean;
    // 是否只读
    isReadOnly: boolean;
    // 是否支持清除
    isClear: boolean;
    // 输入框占位文本
    placeholder: string;
}

// 属性配置
export class AttributeConfiguration implements IAttributeConfiguration {
    //是否禁用
    isDisable: boolean = false;
    // 是否只读
    isReadOnly: boolean = false;
    // 是否支持清除
    isClear: boolean = false;
    // 输入框占位文本
    placeholder: string = '';
}