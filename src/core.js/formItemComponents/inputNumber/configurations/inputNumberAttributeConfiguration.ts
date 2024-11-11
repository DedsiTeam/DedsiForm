import { IAttributeConfiguration, AttributeConfiguration } from '../../../formItems/public-api.ts'

// 控制按钮位置
export enum ControlButtonPosition {
    Default = '',
    Right = 'right'
}

// 输入框：属性配置
export interface IInputNumberAttributeConfiguration extends IAttributeConfiguration {
    // 最小值
    counterMinimum: number
    // 最大值
    counterMaximum: number
    // 数值精度
    numericalAccuracy: number
    // 计数器步长
    counterStep: number
    // 是否使用控制按钮
    isControlButton: boolean
    // 控制按钮位置
    controlButtonPosition: ControlButtonPosition
}

// 输入框：属性配置
export class InputNumberAttributeConfiguration extends AttributeConfiguration implements IInputNumberAttributeConfiguration {
    // 最小值
    counterMinimum: number = 0;
    // 最大值
    counterMaximum: number = 0;
    // 数值精度
    numericalAccuracy: number = 0;
    // 计数器步长
    counterStep: number = 1;
    // 是否使用控制按钮
    isControlButton: boolean = true;
    // 控制按钮位置
    controlButtonPosition: ControlButtonPosition = ControlButtonPosition.Default
}