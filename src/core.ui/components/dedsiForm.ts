import { defineComponent, inject, createVNode, ComponentInternalInstance, getCurrentInstance } from 'vue'

import { ICoreNodeFactory, NodeFactoryNameKey } from '../public-api.ts'
import { IUiComponentName, UiComponentNameKey } from '../factory/uiComponentName.ts'

export default defineComponent({
  name: 'dedsi-form',
  props: {
    // 表单对象
    modelValue: Object,
    // 表单项
    formItems: { type: Array, default: () => [] },
    // 表单配置
    formOptions: Object
  },
  setup(props, { expose }) {
    const currentInstance: ComponentInternalInstance = getCurrentInstance() as ComponentInternalInstance
    // 表单数据对象
    const formModel = props.modelValue
    // 组件名称
    const uiComponentNames: IUiComponentName = inject<IUiComponentName>(UiComponentNameKey) as IUiComponentName
    // 表单创建工厂
    const factory: ICoreNodeFactory = inject<ICoreNodeFactory>(NodeFactoryNameKey) as ICoreNodeFactory

    // 表单配置
    const formProps = {
      model: formModel,
      ref: 'formRef',
      ...props.formOptions
    }
    const formComponent = factory.findUiComponent(uiComponentNames.Form)

    // Row
    const rowComponent = factory.findUiComponent(uiComponentNames.Row)
    // 表单项: 满足渲染条件，不隐藏的
    const rowVNode = createVNode(rowComponent, {}, () => {
      return props.formItems.filter((a: any) => a.advancedConfiguration.hiddenCondition.validate() === false).map((item: any) => factory.createFormItemVNode(uiComponentNames, item, formModel))
    })

    expose({
      getFormRef() {
        return currentInstance.refs[formProps.ref]
      }
    })

    return () => createVNode(formComponent, formProps, () => rowVNode)
  }
})
