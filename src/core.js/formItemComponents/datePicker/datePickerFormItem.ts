import { FormItem } from "../../formItems/formItem.ts";

import { IDatePickerAttributeConfiguration, DatePickerAttributeConfiguration } from './configurations/public-api.ts'

export class DatePickerFormItem extends FormItem {
    // 属性配置
    attributeConfiguration: IDatePickerAttributeConfiguration = new DatePickerAttributeConfiguration();
}