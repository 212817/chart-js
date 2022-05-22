import React, { useRef } from 'react'
import { Paper, Typography } from '@mui/material'
import { Chart } from 'react-chartjs-2'
import 'chart.js/auto'

import { TextFieldSubmit } from '../TextFieldSubmit'
import { RadioGroup } from '../RadioGroup'

/**
 * It takes in a data object, and then uses the data object's id property to determine which chart
 * property to update, and then uses the data object's value property to determine what value to update
 * the chart property to
 * @returns A React component.
 */
export const ChartBar = ({ options, data, types, defaultType, title }) => {
  const chartRef = useRef(null)

  /**
   * The updateData function takes in a data object, and then uses the data object's id property to
   * determine which chart property to update, and then uses the data object's value property to
   * determine what value to update the chart property to.
   */
  const updateData = (data) => {
    const chart = chartRef.current
    switch (data.id) {
      case 'xAxis':
        chart.data.labels = data.value.split(',')
        break
      case 'yAxis':
        chart.data.datasets[0].data = data.value.split(',')
        break
      default:
        break
    }
    chart.update()
  }

  /**
   * If the index is not undefined, then if the payload is line or bar, then set the display to the type false,
   * otherwise set the display to the opposite of the type.
   */
  const hideAxis = (i, type, payload) => {
    // if type chart == radial => false; line => true
    if (i) {
      switch (payload) {
        case 'line':
        case 'bar':
          i.display = type
          break
        case 'radar':
        case 'polarArea':
          i.display = !type
          break
        default:
          break
      }
    }
  }

  /**
   * It takes a payload, gets the chart, sets the chart type, gets the scales, and then hides/show the axes.
   */
  const handleRadio = (payload) => {
    const chart = chartRef.current
    chart.config.type = payload
    const r = chart.config.options.scales?.r
    const x = chart.config.options.scales?.x
    const y = chart.config.options.scales?.y
    hideAxis(r, false, payload)
    hideAxis(x, true, payload)
    hideAxis(y, true, payload)
    chart.update()
  }
  return (
    <Paper
      elevation={5}
      sx={{ mt: 5, p: 2, display: 'flex', flexDirection: 'column' }}
    >
      <Typography variant="subtitle1">{title}</Typography>
      <TextFieldSubmit
        id="xAxis"
        label={'X axis labels:'}
        initialvalue={data?.labels?.join()}
        updateData={updateData}
      />
      <TextFieldSubmit
        id="yAxis"
        label={'Y axis values:'}
        initialvalue={data?.datasets[0]?.data?.join()}
        updateData={updateData}
      />
      <Chart
        ref={chartRef}
        type={defaultType}
        options={options}
        data={data}
        redraw={true}
        fallbackContent={<div>Something went wrong ...</div>}
        height="200px"
      />
      <RadioGroup
        label="Select a graphics type"
        list={types}
        defaultState={defaultType}
        callbackRadio={handleRadio}
      />
    </Paper>
  )
}
