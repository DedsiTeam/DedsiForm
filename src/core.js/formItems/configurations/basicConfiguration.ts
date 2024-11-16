// 基础配置
export interface IBasicConfiguration {
  // 字段名称
  labelName: string
  // 标签样式
  labelStyle: ILabelStyle
}

// 标签样式
export interface ILabelStyle {
  // 宽度
  width: number
  // 对齐方式
  alignmentMode: LabelStyleAlignmentMode
  // 是否显示
  isShow: boolean
}

export enum LabelStyleAlignmentMode {
  Left = 'left',
  Right = 'right'
}

// 基础配置
export class BasicConfiguration implements IBasicConfiguration {
  // 字段名称
  labelName: string = ''

  // 标签样式
  labelStyle: ILabelStyle = new LabelStyle()
}

export class LabelStyle implements ILabelStyle {
  // 宽度
  width: number = 200
  // 对齐方式
  alignmentMode: LabelStyleAlignmentMode = LabelStyleAlignmentMode.Left
  // 是否显示
  isShow: boolean = true
}
