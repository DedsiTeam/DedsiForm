import { FormItem } from '../../public-api.ts'
import { IInputBasicConfiguration, InputBasicConfiguration } from './configurations/inputBasicConfiguration.ts'

// 输入框
export class InputFormItem extends FormItem {
    // 基础配置
    basicConfiguration:IInputBasicConfiguration = new InputBasicConfiguration();
}