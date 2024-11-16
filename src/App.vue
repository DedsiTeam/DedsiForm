<template>
  <div>
    {{ formModel }}
    <hr />
  </div>
  <dedsi-form ref="dedsiFormRef" :form-items="formItems" v-model="formModel" :form-options="formOptions" />
  <el-button @click="dianJiClick">点击</el-button>
</template>

<script setup lang="ts">
import { InputFormItem, InputNumberForm, CascaderFormItem, DatePickerFormItem } from './core.js/public-api.ts';
import { ElementPlusSelectFormItem, ElementPlusRadioFormItem, ElementPlusTableFormItem } from './element-plus/public-api.ts'
import {reactive, ref} from 'vue';

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
item5.attributeConfiguration.placeholder = '请输入'
item5.attributeConfiguration.optionData = [
  {value: 'item5-1', label: 'item5-1'},
  {value: 'item5-2', label: 'item5-2'},
  {value: 'item5-3', label: 'item5-3'},
];

const item6 = new DatePickerFormItem();
item6.dataKey = 'item6';
item6.basicConfiguration.labelName = 'item6';
item6.attributeConfiguration.placeholder = '请输入'

const item7 = new ElementPlusTableFormItem();
item7.dataKey = 'item7';
item7.rowSpan = 24
item7.attributeConfiguration.columns = [
  { prop: 'date', label: 'Date' },
  { prop: 'name', label: 'Name' },
  { prop: 'address', label: 'Address' },
];

const formModel = reactive({
  name: undefined,
  age: undefined,
  homeAddress: undefined,
  item4: undefined,
  item5: 'item5-3',
  item6: '',
  item7: [
    {date: '2024', name: 'name1', address: 'address1'},
    {date: '2024', name: 'name1', address: 'address1'},
    {date: '2024', name: 'name1', address: 'address1'},
    {date: '2024', name: 'name1', address: 'address1'},
  ]
})
const formRules = {
  name: [
    { required: true, message: item1.attributeConfiguration.placeholder, trigger: 'blur' },
  ]
}
const formOptions = {
  labelWidth: 200,
  labelSuffix: ':',
  rules: formRules
}

const dedsiFormRef = ref()
function dianJiClick(){
  const formRef = dedsiFormRef.value.getFormRef();
  formRef.validate()
}

const formItems: any[] = [
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7
]
</script>