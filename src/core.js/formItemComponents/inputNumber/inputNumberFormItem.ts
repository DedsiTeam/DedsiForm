import { FormItem } from '../../public-api.ts'

import { IInputNumberAttributeConfiguration, InputNumberAttributeConfiguration } from './configurations/public-api.ts'

export class InputNumberForm extends FormItem {

    // 表单项名称
    formItemType: string = 'InputNumber';
    // 属性配置
    attributeConfiguration: IInputNumberAttributeConfiguration = new InputNumberAttributeConfiguration();

    createInputProps() {
        return {}
    }
}