import { FormItem } from '../../formItems/formItem.ts'
import { createVNode, VNode } from 'vue'

// 自定义表单项内容
export class CustomFormItem extends FormItem {
  // 表单项名称
  formItemType: string = CustomFormItemTypeNameKey
  // 创建 表单项 VNode
  inputComponentToVNode(): VNode | VNode[] {
    return createVNode('div', { style: { color: 'red' } }, '<>需返回自定义内容</>')
  }
}

// CustomFormItem formItemType
export const CustomFormItemTypeNameKey = 'CustomVNode'
