// 事件配置
export interface IEventConfiguration {
  // change
  onChange?: Function
  // click
  onClick?: Function
  // clear
  onClear?: Function
}

export class EventConfiguration implements IEventConfiguration {
  // change
  onChange?: Function
  // click
  onClick?: Function
  // clear
  onClear?: Function
}
