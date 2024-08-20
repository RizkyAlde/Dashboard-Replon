'use client'
import { Breadcrumbs, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import Link from 'next/link'
import { useState } from 'react'
import CardPresentage from '@views/home/CardPresentage'
import TabsPerHour from '@views/monitoring/TabsPerHour'
import { useGetMonitoring } from "@/features/monitoring/useGetMonitoring";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ScatterVs from "@views/monitoring/ScatterVs";

export default function Page() {
  const [gr, setGr] = useState(1);
  const { data, isLoading, error } = useGetMonitoring(gr);

  const handleChange = event => {
    setGr(event.target.value);
  }

  if (isLoading) return <Typography variant='h3' className='text-center' >Loading...</Typography>;
  if (error) return <Typography variant='h3' className='text-center' >Error loading data.</Typography>;

  return (
    <section>
      <div className='mb-6'>
        <Breadcrumbs aria-label='breadcrumb'>
          <Typography>Dashboard</Typography>
          <Link href='/monitoring'>Monitoring</Link>
        </Breadcrumbs>
      </div>
      <FormControl fullWidth>
        <InputLabel id='greenhouse-select-label'>Greenhouse</InputLabel>
        <Select
          labelId='greenhouse-select-label'
          id='greenhouse-select'
          value={gr}
          onChange={handleChange}
          label='Greenhouse'
        >
          {[...Array(12).keys()].map(i => (
            <MenuItem key={i + 1} value={i + 1}>Greenhouse {i + 1}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Grid container spacing={2} className='mt-4'>
        <Grid item xs={12} sm={6} md={3} xl={6}>
          <CardPresentage
            description='Rerata indikator kelembapan udara'
            icon='tabler-air-conditioning'
            quantity={`${data.moist} %`}
            nameQuantity='Kelembapan udara'
            isIdeal={true}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3} xl={6}>
          <CardPresentage
            description='Rerata indikator suhu'
            icon='tabler-temperature'
            quantity={`${data.temp} C`}
            nameQuantity='Suhu'
            isIdeal={true}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3} xl={6}>
          <CardPresentage
            description='Rerata indikator Cahaya'
            icon='tabler-sun'
            quantity={`${data.lumen} lux`}
            nameQuantity='LUX'
            isIdeal={true}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3} xl={6}>
          <CardPresentage
            description='Rerata indikator kelembapan tanah'
            icon='tabler-heart-pause'
            quantity={`${data.soil} %`}
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
      <Grid item xs={12} className='mt-4'>
        <TabsPerHour />
      </Grid>
      <Grid container spacing={2} className='mt-4'>
        <Grid item xs={12} sm={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant='h3' className='text-center'>Status Pompa</Typography>
              <Typography variant='h4' className='text-center'>ON</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid container xs={12} sm={12} md={9}>
          <Grid item xs={12} sm={6} md={4}>
            <div>
              <Typography variant="body2" className="text-center" >Temperature with humidity</Typography>
              <ScatterVs />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div>
              <Typography variant="body2" className="text-center">Temperature vs light intensity</Typography>
              <ScatterVs/>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div>
              <Typography variant="body2" className="text-center">Temperature vs light intensity</Typography>
              <ScatterVs/>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </section>
  )
}
