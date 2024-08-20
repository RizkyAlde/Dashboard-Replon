import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import { Grid } from '@mui/material'
import CardPresentage from '@views/home/CardPresentage'
import CardIndicator from '@views/home/CardIndicator'
import TabsIndicator from '@views/home/TabsIndicator'
import Link from 'next/link'

export default function Page() {
  return (
    <section>
      <div className='mb-6'>
        <Breadcrumbs aria-label='breadcrumb'>
          <Typography>Dashboard</Typography>
          <Link href='/home'>Home</Link>
        </Breadcrumbs>
        <Typography variant='h2' fontSize={24} className='mt-4'>
          Average
        </Typography>
      </div>
      <Grid item xs={12} justifyContent={'center'} xl={4}>
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
      <div className='mb-6'>
        <Typography variant='h2' fontSize={24} className='mt-4'>
          Presentage of Ideal
        </Typography>
      </div>
      <Grid item xs={12} justifyContent={'center'} xl={4}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3} xl={6}>
            <CardIndicator description='68 %' isIdeal={true} nameQuantity={'Kelembapan Udara'} />
          </Grid>
          <Grid item xs={12} sm={6} md={3} xl={6}>
            <CardIndicator description='75 %' isIdeal={true} nameQuantity={'Suhu'} />
          </Grid>
          <Grid item xs={12} sm={6} md={3} xl={6}>
            <CardIndicator description='61 %' isIdeal={true} nameQuantity={'LUX'} />
          </Grid>
          <Grid item xs={12} sm={6} md={3} xl={6}>
            <CardIndicator description='79 %' isIdeal={false} nameQuantity={'Kelembapan Tanah'} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className='mt-4'>
        <TabsIndicator />
      </Grid>
    </section>
  )
}
