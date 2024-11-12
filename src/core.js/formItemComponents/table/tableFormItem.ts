import { FormItem } from "../../formItems/formItem.ts";

import { ITableAttributeConfiguration, TableAttributeConfiguration } from './configurations/public-api.ts'

export class TableFormItem extends FormItem {
    // 表单项名称
    formItemType: string = 'Table';
    // 属性配置
    attributeConfiguration: ITableAttributeConfiguration = new TableAttributeConfiguration();

    createInputProps() {
        return {}
    }
}