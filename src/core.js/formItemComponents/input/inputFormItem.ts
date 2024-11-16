import { FormItem } from '../../public-api.ts'
import { IInputBasicConfiguration, InputBasicConfiguration, IInputAttributeConfiguration, InputAttributeConfiguration } from './configurations/public-api.ts'

// 输入框
export class InputFormItem extends FormItem {
  // 表单项名称
  formItemType: string = 'Input'
  // 基础配置
  basicConfiguration: IInputBasicConfiguration = new InputBasicConfiguration()
  // 属性配置
  attributeConfiguration: IInputAttributeConfiguration = new InputAttributeConfiguration()

  createInputComponentProps() {
    const superInputProps = super.createInputComponentProps()
    return {
      type: this.attributeConfiguration.type,
      rows: this.attributeConfiguration.rows,
      maxlength: this.attributeConfiguration.maximumInputLength,
      ...superInputProps
    }
  }
}
