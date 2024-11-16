import { IUiComponentName } from '../core.ui/public-api.ts'

const prefix = 'El'

// ElementPlus
export class ElementPlusUiComponentName implements IUiComponentName {
    Form:string = prefix + 'Form';
    FormItem:string = prefix + 'FormItem';
    Row: string =  prefix + 'Row';
    Col: string =  prefix + 'Col';
    Input: string =  prefix + 'Input';
    InputNumber: string =  prefix + 'InputNumber';
    Cascader: string =  prefix + 'Cascader';
    DatePicker: string =  prefix + 'DatePicker';
    Radio: string =  prefix + 'RadioGroup';
    Select: string =  prefix + 'Select';
    Table: string =  prefix + 'Table';
}