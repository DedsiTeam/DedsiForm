<template>
  <div>
    {{ formModel }}
    <hr />
  </div>
  <dedsi-form :form-items="formItems" v-model="formModel" :form-options="formOptions" />
</template>

<script setup lang="ts">
import { InputFormItem, InputNumberForm, CascaderFormItem } from './core.js/public-api.ts';
import { ElementPlusSelectFormItem, ElementPlusRadioFormItem } from './packages/element-plus/public-api.ts'
import { reactive } from 'vue';

const item1 = new InputFormItem();
item1.dataKey = 'name';
item1.basicConfiguration.labelName = 'Name';
item1.attributeConfiguration.placeholder = '请输入'

const item2 = new InputNumberForm();
item2.dataKey = 'age';
item2.basicConfiguration.labelName = 'age';
item2.attributeConfiguration.placeholder = '请输入'

const item3 = new ElementPlusSelectFormItem();
item3.dataKey = 'homeAddress';
item3.basicConfiguration.labelName = 'HomeAddress';
item3.attributeConfiguration.placeholder = '请输入'
item3.attributeConfiguration.optionData = [
  {value: 'homeAddress', label: 'Home Address'},
  {value: 'homeAddress-1', label: 'Home Address-1'},
  {value: 'homeAddress-2', label: 'Home Address-2'},
];

const item4 = new CascaderFormItem();
item4.dataKey = 'item4';
item4.basicConfiguration.labelName = 'item4';
item4.attributeConfiguration.placeholder = '请输入'
item4.attributeConfiguration.optionData = [
  {value: 'homeAddress', label: 'Home Address'},
  {value: 'homeAddress-1', label: 'Home Address-1'},
  {
    value: 'homeAddress-2',
    label: 'Home Address-2',
    children: [
      {value: 'homeAddress', label: 'Home Address'},
      {value: 'homeAddress-1', label: 'Home Address-1'},
      {
        value: 'homeAddress-2',
        label: 'Home Address-2',
        children: [
          {value: 'homeAddress', label: 'Home Address'},
          {value: 'homeAddress-1', label: 'Home Address-1'},
        ]
      },
    ]
  },
];

const item5 = new ElementPlusRadioFormItem();
item5.dataKey = 'item5';
item5.basicConfiguration.labelName = 'item5';
item5.attributeConfiguration.placeholder = 'item5'
item5.attributeConfiguration.optionData = [
  {value: 'item5-1', label: 'item5-1'},
  {value: 'item5-2', label: 'item5-2'},
  {value: 'item5-3', label: 'item5-3'},
];

const formModel = reactive({
  name: undefined,
  age: undefined,
  homeAddress: undefined,
  item4: undefined,
  item5: 'item5-3'
})
const formOptions = {
  labelWidth: 200,
  labelSuffix: ':'
}

const formItems: any[] = [
  item1,
  item2,
  item3,
  item4,
  item5
]
</script>