// import * as React from 'react'
// import * as d3 from 'd3'
import * as d3Array from 'd3-array'
import * as visx from '@visx/visx'
import * as visxMock from '@visx/mock-data/lib/generators/genDateValue'
import { IDimensions } from '../../interfaces/IDimensions'
import { IStroke } from '../../interfaces/IStroke'

const lineCount: number = 12
const series: visxMock.DateValue[][] = new Array(lineCount).fill(null).map((_, i) => visxMock.default(25, i / 47))
const allData: visxMock.DateValue[] = series.reduce((rec, d) => rec.concat(d), [])
const stroke: IStroke = {
  color: `#000000`,
  weight: 1.5,
}
// data accessors
const getX: Function = (d: visxMock.DateValue): Date => d.date
const getY: Function = (d: visxMock.DateValue): number => d.value

// scales
const xScale = visx.scaleTime<number>({
  domain: (d3Array.extent(allData, getX(allData)) as unknown) as [Date, Date],
})
const yScale = visx.scaleLinear<number>({
  domain: [0, (d3Array.max(allData, getY(allData)) as unknown) as number],
})

export const ResponsiveContainer: Function = (dimensions: IDimensions): React.ReactElement => {
  // bounds
  const lineHeight: number = dimensions.height / lineCount

  // update scales
  xScale.range([0, dimensions.width])
  yScale.range([lineHeight, 0])

  return (
    <svg width={dimensions.width} height={dimensions.height}>
      {dimensions.width > 8 &&
        series.map((lineData: visxMock.DateValue[], i: number) => (
          <visx.Group key={`lines-${i}`} top={i * lineHeight}>
            <visx.LinePath<visxMock.DateValue>
              data={lineData}
              x={(d: visxMock.DateValue) => xScale(getX(d)) ?? 0}
              y={(d) => yScale(getY(d)) ?? 0}
              stroke={stroke.color}
              strokeWidth={stroke.weight}
              shapeRendering={`geometricPrecision`}
            />
          </visx.Group>
        ))}
    </svg>
  )
}
