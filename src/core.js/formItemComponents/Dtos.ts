export interface IOptionDataItem {
  value: string | number
  label: string
}

export class OptionDataItem implements IOptionDataItem {
  value: string | number = ''
  label: string = ''
}
