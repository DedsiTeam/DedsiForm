import { FormItem } from "../../formItems/formItem.ts";

import { ITableAttributeConfiguration, TableAttributeConfiguration } from './configurations/public-api.ts'

export class TableFormItem extends FormItem {
    // 属性配置
    attributeConfiguration: ITableAttributeConfiguration = new TableAttributeConfiguration();
}