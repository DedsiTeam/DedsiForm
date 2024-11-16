import { SelectFormItem } from '../../core.js/public-api.ts'
import { Component, createVNode, Reactive } from 'vue'
import { ElOption } from 'element-plus'

export class ElementPlusSelectFormItem extends SelectFormItem {
  // 创建 表单项 VNode
  inputComponentToVNode(uiComponent: Component, formModel: Reactive<any>) {
    const props = this.createInputComponentProps()
    const elOptions = this.attributeConfiguration.optionData.map((option: any) => createVNode(ElOption, { value: option.value, label: option.label }))
    return createVNode(
      uiComponent,
      {
        modelValue: formModel[this.dataKey],
        'onUpdate:modelValue': (newValue: any) => {
          formModel[this.dataKey] = newValue
        },
        ...props
      },
      () => elOptions
    )
  }
}
