import { IDimensions } from './IDimensions'
import { IMargins } from './IMargins'

export interface IBarGroupProps {
  dimensions: IDimensions
  margin: IMargins
  events?: boolean
}
