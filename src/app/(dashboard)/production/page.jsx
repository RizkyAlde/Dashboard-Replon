'use client'
import { Breadcrumbs, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import Link from 'next/link'
import ScatterChart from '@views/monitoring/ScatterChart'
import { useState } from 'react'
import LineChartProduction from '@views/production/LineChartProduction'

export default function Page() {
  const [gr, setGr] = useState(1)

  const handleChange = event => {
    setGr(event.target.value)
  }

  return (
    <section>
      <div className='mb-6'>
        <Breadcrumbs aria-label='breadcrumb'>
          <Typography>Dashboard</Typography>
          <Link href='/production'>Production</Link>
        </Breadcrumbs>
      </div>
      <Grid item xs={12} justifyContent={'center'} xl={4}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6}>
            <ScatterChart />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <ScatterChart />
          </Grid>
        </Grid>
      </Grid>
      <FormControl className='mt-8' fullWidth>
        <InputLabel id='demo-simple-select-label'>Greenhouse</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={gr}
          onChange={handleChange}
          label='Greenhouse'
        >
          <MenuItem value={1}>Greenhouse 1</MenuItem>
          <MenuItem value={2}>Greenhouse 2</MenuItem>
          <MenuItem value={3}>Greenhouse 3</MenuItem>
          <MenuItem value={4}>Greenhouse 4</MenuItem>
          <MenuItem value={5}>Greenhouse 5</MenuItem>
          <MenuItem value={6}>Greenhouse 6</MenuItem>
          <MenuItem value={7}>Greenhouse 7</MenuItem>
          <MenuItem value={8}>Greenhouse 8</MenuItem>
          <MenuItem value={9}>Greenhouse 9</MenuItem>
          <MenuItem value={10}>Greenhouse 10</MenuItem>
          <MenuItem value={11}>Greenhouse 11</MenuItem>
          <MenuItem value={12}>Greenhouse 12</MenuItem>
        </Select>
      </FormControl>
      <Grid item xs={12} className='mt-4'>
        <LineChartProduction />
      </Grid>
    </section>
  )
}
