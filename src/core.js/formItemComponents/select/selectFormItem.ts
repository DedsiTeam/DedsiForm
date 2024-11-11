import { FormItem } from '../../public-api.ts'

import { ISelectAttributeConfiguration, SelectAttributeConfiguration } from './configurations/public-api.ts'

// 下拉框数据源
export class SelectNumberForm extends FormItem {
    // 属性配置
    attributeConfiguration: ISelectAttributeConfiguration = new SelectAttributeConfiguration();
}