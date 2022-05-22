import { Grid } from '@mui/material'

import { ChartBar } from '../components/ChartBar'
import { data1, data2, options, typeChart } from '../data/data'

export default function Home() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={12} md={6}>
        <ChartBar
          title={'Chart №1'}
          defaultType={'bar'}
          options={options}
          data={data1}
          types={typeChart}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <ChartBar
          title={'Chart №2'}
          defaultType={'line'}
          options={options}
          data={data2}
          types={typeChart}
        />
      </Grid>
    </Grid>
  )
}
