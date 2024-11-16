import { IAttributeConfiguration, AttributeConfiguration } from '../../../formItems/public-api.ts'
import { IOptionDataItem } from '../../Dtos.ts'

// 输入框：属性配置
export interface IRadioAttributeConfiguration extends IAttributeConfiguration {
  // 选项数据: 静态数据
  optionData: IOptionDataItem[]
  // 按钮形式
  isButton: boolean
  // 选项数据: 静态数据
  // eslint-disable-next-line no-unused-vars
  setOptionData(optionData: IOptionDataItem[]): void
}

// 输入框：属性配置
export class RadioAttributeConfiguration extends AttributeConfiguration implements IRadioAttributeConfiguration {
  // 选项数据: 静态数据
  optionData: IOptionDataItem[] = []
  // 按钮形式
  isButton: boolean = false
  // 选项数据: 静态数据
  setOptionData(optionData: IOptionDataItem[]) {
    this.optionData = optionData
  }
}
