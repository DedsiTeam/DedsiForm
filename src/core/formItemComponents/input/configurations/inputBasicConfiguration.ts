import { IBasicConfiguration, BasicConfiguration } from '../../../public-api.ts'

export interface IInputBasicConfiguration extends IBasicConfiguration{

}

export class InputBasicConfiguration extends BasicConfiguration implements IInputBasicConfiguration {

}