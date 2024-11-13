import { FormItem } from '../../public-api.ts'

import { ICascaderAttributeConfiguration, CascaderAttributeConfiguration } from './configurations/public-api.ts'

// 级联选择
export class CascaderFormItem extends FormItem {
    // 表单项名称
    formItemType: string = 'Cascader';
    // 属性配置
    attributeConfiguration: ICascaderAttributeConfiguration = new CascaderAttributeConfiguration();

    createInputProps() {
        const superInputProps = super.createInputProps();
        return {
            ...superInputProps,
            options: this.attributeConfiguration.optionData
        }
    }
}