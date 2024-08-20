'use client'

// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import { useColorScheme, useTheme } from '@mui/material/styles'

// Util Imports
import { rgbaToHex } from '@/utils/rgbaToHex'
import { width } from '@mui/system'

// Styled Component Imports
// const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

const CardPresentage = ({ description, icon, quantity, nameQuantity, isIdeal }) => {
  return (
    <Card className={isIdeal ? 'bg-[#AED260]' : 'bg-[#FFA62F]'}>
      <CardHeader title={nameQuantity} subheader={quantity} className='pbe-0' />
      <CardContent className='flex flex-col gap-3 items-center'>
        {/*<AppReactApexCharts type='radialBar' height={148} options={options} series={[78]} />*/}
        <i style={{ width: '96px', height: '96px' }} className={`${icon}`} />
        <Typography variant='body2' color='text.disabled' className='sm:mbs-2 lg:mbs-0'>
          {description}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardPresentage
