import * as React from 'react'
import * as d3array from 'd3-array'
import * as visx from '@visx/visx'
import generateDateValue, { DateValue } from '@visx/mock-data/lib/generators/genDateValue'

const lineCount = 12
const series = new Array(lineCount).fill(null).map((_, i) => generateDateValue(25, i / 47))
const allData = series.reduce((rec, d) => rec.concat(d), [])

// data accessors
const getX = (d: DateValue) => d.date
const getY = (d: DateValue) => d.value

// scales
const xScale = visx.scaleTime<number>({
  domain: d3array.extent(allData, getX) as [Date, Date],
})
const yScale = visx.scaleLinear<number>({
  domain: [0, d3array.max(allData, getY) as number],
})

interface IResponsiveProps {
  width: number
  height: number
}
