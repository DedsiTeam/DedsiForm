// 验证配置
export interface IVerificationConfiguration {
    // 是否必填
    isRequired: boolean;

    // 必填提示语
    isRequiredPrompt ?: string;
}

export class VerificationConfiguration implements IVerificationConfiguration {
    // 是否必填
    isRequired: boolean = true;

    // 必填提示语
    isRequiredPrompt ?: string;
}