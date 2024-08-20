import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'

const CardCheckPump = () => {
  return (
    <Card className='bg-[#AED260]'>
      <CardHeader title='Green House' />
      <CardContent>
        <div className='flex justify-center items-center rounded-3xl  bg-slate-300'>
          <div className='bg-green-700 w-8 h-8 rounded-full mr-2 ' />
          <Typography variant='h3'>ON</Typography>
        </div>
      </CardContent>
    </Card>
  )
}

export default CardCheckPump
