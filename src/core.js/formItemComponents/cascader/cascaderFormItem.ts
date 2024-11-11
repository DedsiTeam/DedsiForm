import { FormItem } from '../../public-api.ts'

import { ICascaderAttributeConfiguration, CascaderAttributeConfiguration } from './configurations/public-api.ts'

// 级联选择
export class CascaderFormItem extends FormItem {
    // 属性配置
    attributeConfiguration: ICascaderAttributeConfiguration = new CascaderAttributeConfiguration();
}