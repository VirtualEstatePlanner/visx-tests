import React from 'react'
import { BarGroupHorizontal, Bar } from '@visx/shape'
import { Group } from '@visx/group'
import { AxisLeft } from '@visx/axis'
import cityTemperature, { CityTemperature } from '@visx/mock-data/lib/mocks/cityTemperature'
import { scaleBand, scaleLinear, scaleOrdinal } from '@visx/scale'
import { timeParse, timeFormat } from 'd3-time-format'
import { IBarGroupProps } from '../../interfaces/IBarGroupProps'
import { defaultMargins } from '../../props/defaultMargins'

export type BarGroupHorizontalProps = {
  width: number
  height: number
  margin?: { top: number; right: number; bottom: number; left: number }
  events?: boolean
}

type CityName = 'New York' | 'San Francisco' | 'Austin'

const background: string = `#F3F3F3`
const textColor: string = `#202020`
const firstBar: string = `#AEEEF8`
const secondBar: string = `#E5FD3D`
const thirdBar: string = `#9CAFF6`

const data: CityTemperature[] = cityTemperature.slice(0, 4)
const keys: CityName[] = Object.keys(data[0]).filter((d) => d !== `date`) as CityName[]

const parseDate = timeParse(`%Y-%m-%d`)
const format = timeFormat(`%b %d`)
const formatDate = (date: string) => format(parseDate(date) as Date)
function max<D>(arr: D[], fn: (d: D) => number) {
  return Math.max(...arr.map(fn))
}

// accessors
const getDate = (d: CityTemperature) => d.date

// scales
const dateScale = scaleBand({
  domain: data.map(getDate),
  padding: 0.2,
})
const cityScale = scaleBand({
  domain: keys,
  padding: 0.1,
})
const tempScale = scaleLinear<number>({
  domain: [0, max(data, (d) => max(keys, (key) => Number(d[key])))],
})
const colorScale = scaleOrdinal<string, string>({
  domain: keys,
  range: [firstBar, secondBar, thirdBar],
})

export const HorizontalBarGroup: Function = ({ dimensions, margin = defaultMargins, events = false }: IBarGroupProps): React.ReactElement | null => {
  // bounds
  const xMax = dimensions.width - margin.left - margin.right
  const yMax = dimensions.height - margin.top - margin.bottom

  // update scale output dimensions
  dateScale.rangeRound([0, yMax])
  cityScale.rangeRound([0, dateScale.bandwidth()])
  tempScale.rangeRound([0, xMax])

  return dimensions.width < 10 ? null : (
    <svg width={dimensions.width} height={dimensions.height}>
      <rect x={0} y={0} width={dimensions.width} height={dimensions.height} fill={background} rx={14} />
      <Group top={margin.top} left={margin.left}>
        <BarGroupHorizontal data={data} keys={keys} width={xMax} y0={getDate} y0Scale={dateScale} y1Scale={cityScale} xScale={tempScale} color={colorScale}>
          {(barGroups) =>
            barGroups.map((barGroup) => (
              <Group key={`bar-group-horizontal-${barGroup.index}-${barGroup.y0}`} top={barGroup.y0}>
                {barGroup.bars.map((bar) => (
                  <Bar
                    key={`${barGroup.index}-${bar.index}-${bar.key}`}
                    x={bar.x}
                    y={bar.y}
                    width={bar.width}
                    height={bar.height}
                    fill={bar.color}
                    rx={4}
                    onClick={() => {
                      if (events) alert(`${bar.key} (${bar.value}) - ${JSON.stringify(bar)}`)
                    }}
                  />
                ))}
              </Group>
            ))
          }
        </BarGroupHorizontal>
        <AxisLeft
          scale={dateScale}
          stroke={textColor}
          tickStroke={textColor}
          tickFormat={formatDate}
          hideAxisLine
          tickLabelProps={() => ({
            fill: textColor,
            fontSize: 11,
            textAnchor: 'end',
            dy: '0.33em',
          })}
        />
      </Group>
    </svg>
  )
}
