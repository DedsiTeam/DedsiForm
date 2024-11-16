import { FormItem } from '../../formItems/formItem.ts'

import { ITableAttributeConfiguration, TableAttributeConfiguration } from './configurations/public-api.ts'

export class TableFormItem extends FormItem {
  // 表单项名称
  formItemType: string = 'Table'
  // 表格标题
  tableTitle: string = ''
  // 属性配置
  attributeConfiguration: ITableAttributeConfiguration = new TableAttributeConfiguration()

  // 创建 输入组件需要到 props
  createInputComponentProps() {
    const superInputProps = super.createInputComponentProps()
    return {
      ...superInputProps
    }
  }
}
