import { ComponentInternalInstance, getCurrentInstance, Reactive, createVNode, Component, VNode } from 'vue';
import { IUiComponentName } from './uiComponentName.ts'
import { IFormItem } from '../../core.js/public-api.ts'

// 空节点
export const emptyComponent = createVNode('div', {}, '空组件！')

export const NodeFactoryNameKey = 'NodeFactory'

export interface ICoreNodeFactory {
  // 查找组件
  // eslint-disable-next-line no-unused-vars
  findUiComponent(uiComponentName: string): Component

  // 创建 表单项
  // Col --> FormItem --> InputComponent
  // eslint-disable-next-line no-unused-vars
  createFormItemVNode(uiComponentNames: IUiComponentName, formItem: IFormItem, formModel: Reactive<any>): VNode
}

// 抽象， 具体实现有 UINodeFactory 实现
export abstract class CoreNodeFactory implements ICoreNodeFactory {
  // 查找组件
  findUiComponent(uiComponentName: string): Component {
    const currentInstance: ComponentInternalInstance = getCurrentInstance() as ComponentInternalInstance
    const component = currentInstance.appContext.components[uiComponentName]
    if (!component) {
      return emptyComponent
    }
    return component
  }

  // 创建 表单项
  // Col --> FormItem --> InputComponent
  // eslint-disable-next-line no-unused-vars
  abstract createFormItemVNode(uiComponentNames: IUiComponentName, formItem: IFormItem, formModel: Reactive<any>): VNode
}
