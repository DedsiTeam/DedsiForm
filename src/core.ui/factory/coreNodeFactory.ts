import {ComponentInternalInstance, getCurrentInstance, Reactive, createVNode } from 'vue'
import { IUiComponentName } from './uiComponentName.ts'
import { IFormItem } from '../../core.js/public-api.ts'

// 空节点
const emptyComponent = createVNode('div', {}, '空组件！')


export class CoreNodeFactory {
    private currentInstance: ComponentInternalInstance = getCurrentInstance() as ComponentInternalInstance;

    // 查找组件
    findUiComponent(uiComponentName: string) {
        const component = this.currentInstance.appContext.components[uiComponentName];
        if (!component) {
            return emptyComponent;
        }
        return component;
    }

    // 创建 表单项
    // Col --> FormItem --> InputComponent
    createFormItemVNode(uiComponentNames: IUiComponentName, formItem: IFormItem, formModel: Reactive<any>) {
        // 输入组件
        const inputComponentProps = formItem.createInputProps()
        const inputComponent = this.findUiComponent(uiComponentNames[formItem.formItemType]);

        // formItem
        const formItemProps = {
            label: formItem.basicConfiguration.labelName,
            prop: formItem.dataKey
        };
        const formItemComponent = this.findUiComponent(uiComponentNames.FormItem);

        // col
        const colProps = {
            span: formItem.rowSpan
        }
        const colComponent = this.findUiComponent(uiComponentNames.Col);

        return createVNode(
            colComponent,
            colProps,
            () => createVNode(
                formItemComponent,
                formItemProps,
                () => createVNode(
                    inputComponent,
                    {
                        modelValue: formModel[formItem.dataKey],
                        'onUpdate:modelValue': (newValue: any) => {
                            formModel[formItem.dataKey] = newValue;
                        },
                        ...inputComponentProps
                    }
                )
            )
        )
    }

}