import { IAttributeConfiguration, AttributeConfiguration } from '../../../formItems/public-api.ts'
import { IOptionDataItem } from '../../Dtos.ts'

// 输入框：属性配置
export interface ISelectAttributeConfiguration extends IAttributeConfiguration {
  // 选项数据: 静态数据
  optionData: IOptionDataItem[]
  // 是否多选
  isMultiple: boolean
  // 多选时用户最多可以选择的项目数，为 0 则不限制
  multipleCount: number
  // 选项数据: 静态数据
  // eslint-disable-next-line no-unused-vars
  setOptionData(optionData: IOptionDataItem[]): void
}

// 输入框：属性配置
export class SelectAttributeConfiguration extends AttributeConfiguration implements ISelectAttributeConfiguration {
  // 选项数据: 静态数据
  optionData: IOptionDataItem[] = []
  // 是否多选
  isMultiple: boolean = false
  // 多选时用户最多可以选择的项目数，为 0 则不限制
  multipleCount: number = 0
  // 选项数据: 静态数据
  setOptionData(optionData: IOptionDataItem[]) {
    this.optionData = optionData
  }
}
