import { IBasicConfiguration, BasicConfiguration } from '../../../public-api.ts'

// 输入框：基础配置
export interface IInputBasicConfiguration extends IBasicConfiguration {

}

// 输入框：基础配置
export class InputBasicConfiguration extends BasicConfiguration implements IInputBasicConfiguration {

}