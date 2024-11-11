import { IAttributeConfiguration, AttributeConfiguration } from '../../../formItems/public-api.ts'

// 显示类型
export enum DatePickerType {
    date = 'date',
    week = 'week',
    month = 'month',
    quarter = 'quarter',
    year = 'year'
}

// 级联选择：属性配置
export interface IDatePickerAttributeConfiguration extends IAttributeConfiguration {
    // 显示类型
    DatePickerType:DatePickerType;
    // 显示在输入框中的格式
    format: string;
}

// 级联选择：属性配置
export class DatePickerAttributeConfiguration extends AttributeConfiguration implements IDatePickerAttributeConfiguration {
    // 显示类型
    DatePickerType:DatePickerType = DatePickerType.date;
    // 显示在输入框中的格式
    format: string = '';
}