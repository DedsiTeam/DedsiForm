import { TableFormItem } from '../../core.js/public-api.ts'
import { Component, createVNode, Reactive } from 'vue'
import { ElTableColumn } from 'element-plus'

export class ElementPlusTableFormItem extends TableFormItem {
  // 创建 表单项 VNode
  inputComponentToVNode(uiComponent: Component, formModel: Reactive<any>) {
    const props = this.createInputComponentProps()
    const newProps = {
      ...props,
      data: formModel[this.dataKey],
      border: this.attributeConfiguration.bordered,
      width: this.attributeConfiguration.width
    }
    const elTableColumns = this.attributeConfiguration.columns.map((columnProps) => createVNode(ElTableColumn, columnProps))
    return createVNode('div', { style: { width: '100%' } }, [createVNode('h4', null, this.tableTitle), createVNode(uiComponent, newProps, () => elTableColumns)])
  }
}
