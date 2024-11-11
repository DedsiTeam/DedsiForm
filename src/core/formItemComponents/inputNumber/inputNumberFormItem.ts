import { FormItem } from '../../public-api.ts'

import { IInputNumberAttributeConfiguration, InputNumberAttributeConfiguration } from './configurations/public-api.ts'

export class InputNumberForm extends FormItem {
    // 属性配置
    attributeConfiguration: IInputNumberAttributeConfiguration = new InputNumberAttributeConfiguration();
}