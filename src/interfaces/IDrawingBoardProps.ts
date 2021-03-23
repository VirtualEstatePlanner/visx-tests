import { IDimensions } from './IDimensions'
import { ILine } from './ILine'

export interface IDrawingBoardProps {
  dimensions: IDimensions
  data: ILine[][]
}
