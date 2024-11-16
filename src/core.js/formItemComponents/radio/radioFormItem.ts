import { FormItem } from '../../public-api.ts'
import { IRadioAttributeConfiguration, RadioAttributeConfiguration } from './configurations/radioAttributeConfiguration.ts'

export class RadioFormItem extends FormItem {
  // 表单项名称
  formItemType: string = 'Radio'
  // 属性配置
  attributeConfiguration: IRadioAttributeConfiguration = new RadioAttributeConfiguration()

  createInputComponentProps() {
    const superInputProps = super.createInputComponentProps();
    return {
      ...superInputProps
    }
  }
}
