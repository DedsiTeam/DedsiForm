// 属性配置
export interface IAttributeConfiguration {
  //是否禁用
  isDisable: boolean
  // 是否只读
  isReadOnly: boolean
  // 是否支持清除
  isClear: boolean
  // 输入框占位文本
  placeholder: string

  enableIsDisable(): void

  closeIsDisable(): void

  enableIsReadOnly(): void

  closeIsReadOnly(): void
}

// 属性配置
export class AttributeConfiguration implements IAttributeConfiguration {
  //是否禁用
  isDisable: boolean = false
  // 是否只读
  isReadOnly: boolean = false
  // 是否支持清除
  isClear: boolean = true
  // 输入框占位文本
  placeholder: string = ''

  enableIsDisable() {
    this.isDisable = true
  }
  closeIsDisable() {
    this.isDisable = false
  }
  enableIsReadOnly() {
    this.isReadOnly = true
  }
  closeIsReadOnly() {
    this.isReadOnly = false
  }
}
