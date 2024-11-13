import { TableFormItem } from '../../../core.js/public-api.ts';
import { Component, createVNode, Reactive } from 'vue';
import { ElTableColumn } from 'element-plus'

export class ElementPlusTableFormItem extends TableFormItem {
    // 创建 表单项 VNode
    createFormItemVNode(uiComponent: Component, formModel: Reactive<any>) {
        const props = this.createInputComponentProps();
        const newProps = {
            ...props,
            data: formModel[this.dataKey]
        }

        const elTableColumns = this.attributeConfiguration.columns.map((columnProps) => createVNode(ElTableColumn, columnProps));

        return createVNode(uiComponent, newProps, () => elTableColumns)
    }
}