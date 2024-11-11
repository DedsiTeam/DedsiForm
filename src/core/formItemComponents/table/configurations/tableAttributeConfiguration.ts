import { IAttributeConfiguration, AttributeConfiguration } from '../../../formItems/public-api.ts'

// 输入框：属性配置
export interface ITableAttributeConfiguration extends IAttributeConfiguration {
    // 数据
    dataSource: any[];
    // 列
    columns: any[];
    //  行数据的key
    rowKey: string;
    // 高度
    height: string;
    // 显示行号
    isShowRowNo: boolean;
    // 边框
    bordered: boolean;
}

// 输入框：属性配置
export class TableAttributeConfiguration extends AttributeConfiguration implements ITableAttributeConfiguration {
    // 数据
    dataSource: any[] = [];
    // 列
    columns: any[] = [];
    //  行数据的key
    rowKey: string = 'key';
    // 高度
    height: string = '';
    // 显示行号
    isShowRowNo: boolean = true;
    // 边框
    bordered: boolean = false;
}