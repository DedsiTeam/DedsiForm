import {
    IBasicConfiguration, BasicConfiguration,
    IAttributeConfiguration, AttributeConfiguration,
    IVerificationConfiguration, VerificationConfiguration
} from './configurations/public-api.ts'

export interface IFormItem {
    // 基础配置
    basicConfiguration:IBasicConfiguration;
    // 属性配置
    attributeConfiguration: IAttributeConfiguration;
    // 验证配置
    verificationConfiguration: IVerificationConfiguration;
}

export class FormItem implements IFormItem {
    // 基础配置
    basicConfiguration:IBasicConfiguration = new BasicConfiguration();
    // 属性配置
    attributeConfiguration: IAttributeConfiguration = new AttributeConfiguration();
    // 验证配置
    verificationConfiguration: IVerificationConfiguration = new VerificationConfiguration();
}