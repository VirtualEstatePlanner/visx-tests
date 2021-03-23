import { Group, curveBasis, LinePath, scaleTime, scaleLinear, AxisLeft, AxisBottom, GridRows, GridColumns } from '@visx/visx'
import cityTemperature, { CityTemperature } from '@visx/mock-data/lib/mocks/cityTemperature'
import { IThresholdDifferenceProps } from '../../interfaces/IThresholdDifferenceProps'
import { Threshold } from '@visx/threshold'
import { IMargins } from '../../interfaces/IMargins'

export const background = `#F3F3F3`
const strokeColor: string = `#E0E0E0`
const secondaryStrokeColor: string = `#222222`
// accessors
const date = (date: CityTemperature) => new Date(date.date).valueOf()
const ny = (newYork: CityTemperature) => Number(newYork['New York'])
const sf = (sanFrancisco: CityTemperature) => Number(sanFrancisco['San Francisco'])

// scales
const timeScale = scaleTime<number>({
  domain: [Math.min(...cityTemperature.map(date)), Math.max(...cityTemperature.map(date))],
})
const temperatureScale = scaleLinear<number>({
  domain: [Math.min(...cityTemperature.map((d) => Math.min(ny(d), sf(d)))), Math.max(...cityTemperature.map((d) => Math.max(ny(d), sf(d))))],
  nice: true,
})

const defaultMargin: IMargins = { top: 40, right: 30, bottom: 50, left: 40 }

export const ThresholdDifference: Function = ({ width, height, margin = defaultMargin }: IThresholdDifferenceProps): React.ReactElement | null => {
  if (width < 10) return null

  // bounds
  const xMax = width - margin.left - margin.right
  const yMax = height - margin.top - margin.bottom

  timeScale.range([0, xMax])
  temperatureScale.range([yMax, 0])

  return (
    <div>
      <svg width={width} height={height}>
        <rect x={0} y={0} width={width} height={height} fill={background} rx={14} />
        <Group left={margin.left} top={margin.top}>
          <GridRows scale={temperatureScale} width={xMax} height={yMax} stroke={strokeColor} />
          <GridColumns scale={timeScale} width={xMax} height={yMax} stroke={strokeColor} />
          <line x1={xMax} x2={xMax} y1={0} y2={yMax} stroke={strokeColor} />
          <AxisBottom top={yMax} scale={timeScale} numTicks={width > 520 ? 10 : 5} />
          <AxisLeft scale={temperatureScale} />
          <text x={`-70`} y={`15`} transform={`rotate(-90)`} fontSize={10}>
            Temperature (°F)
          </text>
          <Threshold<CityTemperature>
            id={`${Math.random()}`}
            data={cityTemperature}
            x={(d) => timeScale(date(d)) ?? 0}
            y0={(d) => temperatureScale(ny(d)) ?? 0}
            y1={(d) => temperatureScale(sf(d)) ?? 0}
            clipAboveTo={0}
            clipBelowTo={yMax}
            curve={curveBasis}
            belowAreaProps={{
              fill: `violet`,
              fillOpacity: 0.4,
            }}
            aboveAreaProps={{
              fill: `green`,
              fillOpacity: 0.4,
            }}
          />
          <LinePath
            data={cityTemperature}
            curve={curveBasis}
            x={(d) => timeScale(date(d)) ?? 0}
            y={(d) => temperatureScale(sf(d)) ?? 0}
            stroke={secondaryStrokeColor}
            strokeWidth={1.5}
            strokeOpacity={0.8}
            strokeDasharray={`1,2`}
          />
          <LinePath data={cityTemperature} curve={curveBasis} x={(d) => timeScale(date(d)) ?? 0} y={(d) => temperatureScale(ny(d)) ?? 0} stroke={secondaryStrokeColor} strokeWidth={1.5} />
        </Group>
      </svg>
    </div>
  )
}
