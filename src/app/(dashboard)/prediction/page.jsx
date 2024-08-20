'use client'
import { Breadcrumbs, FormControl, Grid, InputLabel, Link, MenuItem, Select, Typography } from '@mui/material'
import { useState } from 'react'
import CardPresentage from '@views/home/CardPresentage'
import TabsPerHour from '@views/monitoring/TabsPerHour'

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
          <Link href='/prediction'>Prediction</Link>
        </Breadcrumbs>
      </div>
      <FormControl className='mt-4' fullWidth>
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
      <Grid className='mt-4' item xs={12} justifyContent={'center'} xl={4}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3} xl={6}>
            <CardPresentage
              description='Rerata indikator kelembapan udara'
              icon='tabler-air-conditioning'
              quantity='38.5 %'
              nameQuantity='Kelembapan udara'
              isIdeal={true}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} xl={6}>
            <CardPresentage
              description='Rerata indikator suhu'
              icon='tabler-temperature'
              quantity='38.5 C'
              nameQuantity='Suhu'
              isIdeal={true}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} xl={6}>
            <CardPresentage
              description='Rerata indikator Cahaya'
              icon='tabler-sun'
              quantity='881lux'
              nameQuantity='LUX'
              isIdeal={true}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} xl={6}>
            <CardPresentage
              description='Rerata indikator kelembapan tanah'
              icon='tabler-heart-pause'
              quantity='67.8%'
              nameQuantity='Kelembapan tanah'
              isIdeal={false}
            />
          </Grid>
        </Grid>
        <Typography variant='body2' className='mt-4'>
          Keterangan :
        </Typography>
        <div className='flex justify-start items-center gap-4'>
          <div className='flex items-center'>
            <div className='w-4 h-4 rounded-full bg-[#AED260] mr-2' />
            <Typography variant='body2'>Ideal</Typography>
          </div>
          <div className='flex items-center'>
            <div className='w-4 h-4 rounded-full bg-[#FFA62F] mr-2' />
            <Typography variant='body2'>Tidak Ideal</Typography>
          </div>
        </div>
      </Grid>
      <Grid item xs={12} className='mt-4'>
        <TabsPerHour />
      </Grid>
    </section>
  )
}
