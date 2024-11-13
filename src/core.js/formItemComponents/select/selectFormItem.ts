import { FormItem } from '../../public-api.ts'

import { ISelectAttributeConfiguration, SelectAttributeConfiguration } from './configurations/public-api.ts'

// 下拉框数据源
export class SelectFormItem extends FormItem {

    // 表单项名称
    formItemType: string = 'Select';
    // 属性配置
    attributeConfiguration: ISelectAttributeConfiguration = new SelectAttributeConfiguration();

    // 创建 输入组件需要到 props
    createInputProps() {
        const superInputProps = super.createInputProps();
        return {
            ...superInputProps,
            options: this.attributeConfiguration.optionData
        }
    }

}