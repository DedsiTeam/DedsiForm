// 验证配置
export interface IVerificationConfiguration {
  // 是否必填
  isRequired: boolean

  // 必填提示语
  isRequiredPrompt: string
  // 获得必填校验
  getRequiredRule(): Object
}

export class VerificationConfiguration implements IVerificationConfiguration {
  // 是否必填
  isRequired: boolean = true

  // 必填提示语
  isRequiredPrompt: string = ''

  // 获得必填校验
  getRequiredRule(): Object {
    return { required: true, message: this.isRequiredPrompt, trigger: 'blur' }
  }
}
