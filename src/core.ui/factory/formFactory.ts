import { getCurrentInstance, ComponentInternalInstance, createVNode } from 'vue'

// 创建表单组件：Form
export function formFactory(formName: string) {
    const currentInstance: ComponentInternalInstance = getCurrentInstance() as ComponentInternalInstance;

    return currentInstance.appContext.components[formName] ?? createVNode('div',{}, '找不到组件！');
}