import { CoreNodeFactory, IUiComponentName } from '../../core.ui/public-api.ts'
import { IFormItem } from '@/dedsi/form/core.js/formItems/formItem.ts'
import { createVNode, Reactive } from 'vue'
import { CustomFormItemTypeNameKey } from '../../core.js/public-api.ts'
import { ElementPlusUiComponentName } from '../elementPlusUiComponentName.ts'

export class ElementPlusCoreNodeFactory extends CoreNodeFactory {
  // 创建 表单项
  // Col --> FormItem --> InputComponent
  createFormItemVNode(uiComponentNames: IUiComponentName, formItem: IFormItem, formModel: Reactive<any>) {
    // 输入组件
    const inputComponent = this.findUiComponent(uiComponentNames[formItem.formItemType])

    // formItem inputComponent Props
    setElementPlusInputComponentProps(formItem)

    // col
    const colProps = {
      span: formItem.rowSpan
    }
    const colComponent = this.findUiComponent(uiComponentNames.Col)

    // 自定义表单项
    if (formItem.formItemType === CustomFormItemTypeNameKey && formItem.rowSpan === 24) {
      return createVNode(colComponent, colProps, () => formItem.inputComponentToVNode(inputComponent, formModel))
    }

    // formItem
    const formItemProps = {
      prop: formItem.dataKey,

      label: formItem.basicConfiguration.labelName,
      labelWidth: formItem.basicConfiguration.labelStyle.width,

      ...formItem.styleConfiguration.createStyle()
    }
    const formItemComponent = this.findUiComponent(uiComponentNames.FormItem)

    return createVNode(colComponent, colProps, () => createVNode(formItemComponent, formItemProps, () => formItem.inputComponentToVNode(inputComponent, formModel)))
  }

  // 创建 ElementPlus 表单项
  createElementPlusFormItemVNode(formItem: IFormItem, formModel: Reactive<any>) {
    return this.createFormItemVNode(new ElementPlusUiComponentName(), formItem, formModel)
  }
}

// ElementPlus InputComponent Props
export function setElementPlusInputComponentProps(formItem: IFormItem) {
  const oldProps = formItem.createInputComponentProps()
  formItem.createInputComponentProps = function () {
    return {
      ...oldProps,
      placeholder: formItem.attributeConfiguration.placeholder,
      disabled: formItem.attributeConfiguration.isDisable,
      readonly: formItem.attributeConfiguration.isReadOnly,
      clearable: formItem.attributeConfiguration.isClear
    }
  }
}
