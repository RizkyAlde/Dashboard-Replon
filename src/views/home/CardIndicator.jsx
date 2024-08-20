'use client'

// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'

const CardIndicator = ({ description, nameQuantity, isIdeal }) => {
  return (
    <Card className={isIdeal ? 'bg-[#AED260]' : 'bg-[#FFA62F]'}>
      <CardHeader title={nameQuantity} className='pbe-0' />
      <CardContent className='flex flex-col gap-3 items-center'>
        <Typography variant='h2' color='text' className='sm:mbs-2 lg:mbs-0'>
          {description}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CardIndicator
