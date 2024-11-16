// 高级配置
export interface IAdvancedConfiguration {
  // 隐藏条件
  hiddenCondition: IHiddenCondition
}

// 隐藏条件
export interface IHiddenCondition {
  // 此方法返回返回 boolean： true 就隐藏
  validate(): boolean
}

// 高级配置
export class AdvancedConfiguration implements IAdvancedConfiguration {
  // 隐藏条件
  hiddenCondition: IHiddenCondition = new HiddenCondition()
}

export class HiddenCondition implements IHiddenCondition {
  // 此方法返回返回 boolean： true 就隐藏
  validate(): boolean {
    return false
  }
}
