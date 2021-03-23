import { Group } from '@visx/group'
import { BarGroup } from '@visx/shape'
import { AxisBottom } from '@visx/axis'
import cityTemperature, { CityTemperature } from '@visx/mock-data/lib/mocks/cityTemperature'
import { scaleBand, scaleLinear, scaleOrdinal } from '@visx/scale'
import { timeParse, timeFormat } from 'd3-time-format'
import { defaultMargins } from '../../props/defaultMargins'
import { IBarGroupProps } from '../../interfaces/IBarGroupProps'

type CityName = `New York` | `San Francisco` | `Austin`

const background: string = `#F3F3F3`
const textColor: string = `#202020`
const firstBar: string = `#AEEEF8`
const secondBar: string = `#E5FD3D`
const thirdBar: string = `#9CAFF6`

const data: CityTemperature[] = cityTemperature.slice(0, 8)
const keys: CityName[] = Object.keys(data[0]).filter((d) => d !== `date`) as CityName[]

const parseDate = timeParse(`%Y-%m-%d`)
const format = timeFormat(`%b %d`)
const formatDate = (date: string) => format(parseDate(date) as Date)

// accessors
const getDate = (d: CityTemperature) => d.date

// scales
const dateScale = scaleBand<string>({
  domain: data.map(getDate),
  padding: 0.2,
})
const cityScale = scaleBand<string>({
  domain: keys,
  padding: 0.1,
})
const tempScale = scaleLinear<number>({
  domain: [0, Math.max(...data.map((d) => Math.max(...keys.map((key) => Number(d[key])))))],
})
const colorScale = scaleOrdinal<string, string>({
  domain: keys,
  range: [firstBar, secondBar, thirdBar],
})

export const SomeBarGroup: Function = ({ dimensions, events = false, margin = defaultMargins }: IBarGroupProps): React.ReactElement | null => {
  // bounds
  const xMax = dimensions.width - margin.left - margin.right
  const yMax = dimensions.height - margin.top - margin.bottom

  // update scale output dimensions
  dateScale.rangeRound([0, xMax])
  cityScale.rangeRound([0, dateScale.bandwidth()])
  tempScale.range([yMax, 0])

  return dimensions.width < 10 ? null : (
    <svg width={dimensions.width} height={dimensions.height}>
      <rect x={0} y={0} width={dimensions.width} height={dimensions.height} fill={background} rx={14} />
      <Group top={margin.top} left={margin.left}>
        <BarGroup data={data} keys={keys} height={yMax} x0={getDate} x0Scale={dateScale} x1Scale={cityScale} yScale={tempScale} color={colorScale}>
          {(barGroups) =>
            barGroups.map((barGroup) => (
              <Group key={`bar-group-${barGroup.index}-${barGroup.x0}`} left={barGroup.x0}>
                {barGroup.bars.map((bar) => (
                  <rect
                    key={`bar-group-bar-${barGroup.index}-${bar.index}-${bar.value}-${bar.key}`}
                    x={bar.x}
                    y={bar.y}
                    width={bar.width}
                    height={bar.height}
                    fill={bar.color}
                    rx={4}
                    onClick={() => {
                      if (!events) return
                      const { key, value } = bar
                      alert(JSON.stringify({ key, value }))
                    }}
                  />
                ))}
              </Group>
            ))
          }
        </BarGroup>
      </Group>
      <AxisBottom
        top={yMax + margin.top}
        tickFormat={formatDate}
        scale={dateScale}
        stroke={textColor}
        tickStroke={textColor}
        hideAxisLine
        tickLabelProps={() => ({
          fill: textColor,
          fontSize: 11,
          textAnchor: `middle`,
        })}
      />
    </svg>
  )
}
