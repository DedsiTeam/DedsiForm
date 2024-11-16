// 样式配置
export interface IStyleConfiguration {
  // id
  id?: string
  // class
  className?: string
  // style
  style?: Object
  // 创建出一个样式对象
  createStyle(): Object
}

export class StyleConfiguration implements IStyleConfiguration {
  // id
  id?: string
  // class
  className?: string
  // style
  style?: Object
  // 创建出一个样式对象
  createStyle(): Object {
    return {
      id: this.id,
      class: this.className,
      style: this.style
    }
  }
}