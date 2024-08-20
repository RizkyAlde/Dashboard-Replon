'use client'

// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Card from '@mui/material/Card'
import { useColorScheme, useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// Util Imports
import { rgbaToHex } from '@/utils/rgbaToHex'

// Styled Component Imports
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

// Vars
const scatterColors = {
  series1: '#ff9f43'
}

const series = [
  {
    name: 'Celcius',
    data: [
      { x: 5.4, y: 170 },
      { x: 5.4, y: 100 },
      { x: 6.3, y: 170 },
      { x: 5.7, y: 140 },
      { x: 5.9, y: 130 },
      { x: 7.0, y: 150 },
      { x: 8.0, y: 120 },
      { x: 9.0, y: 170 },
      { x: 10.0, y: 190 },
      { x: 11.0, y: 220 },
      { x: 12.0, y: 170 },
      { x: 13.0, y: 230 }
    ]
  }
]

const ScatterChart = () => {
  // Hooks
  const theme = useTheme()
  const { mode } = useColorScheme()

  // Vars
  const _mode = (mode === 'system' ? serverMode : mode) || 'light'
  const divider = rgbaToHex(`rgb(${theme.mainColorChannels[_mode]} / 0.12)`)
  const textDisabled = rgbaToHex(`rgb(${theme.mainColorChannels[_mode]} / 0.4)`)

  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false },
      zoom: {
        type: 'xy',
        enabled: true
      }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      markers: {
        offsetY: 2,
        offsetX: theme.direction === 'rtl' ? 7 : -4
      },
      fontSize: '13px',
      labels: { colors: rgbaToHex(`rgb(${theme.mainColorChannels[_mode]} / 0.7)`) },
      itemMargin: {
        vertical: 3,
        horizontal: 10
      }
    },
    colors: [scatterColors.series1],
    grid: {
      borderColor: divider,
      xaxis: {
        lines: { show: true }
      }
    },
    yaxis: {
      labels: {
        offsetX: -18,
        formatter: val => `${val} Ton`,
        style: { colors: textDisabled, fontSize: '13px' }
      }
    },
    xaxis: {
      tickAmount: 10,
      axisBorder: { show: false },
      axisTicks: { color: divider },
      crosshairs: {
        stroke: { color: divider }
      },
      labels: {
        style: { colors: textDisabled, fontSize: '13px' },
        formatter: val => `${parseFloat(val).toFixed(1)} °C`
      }
    }
  }

  return (
    <Card
      sx={{
        backgroundColor: '#AED260',
        paddingX: 8,
        paddingBottom: 8
      }}
    >
      <CardHeader
        title='Rerata Suhu'
        subheader='34.5 °C'
        sx={{
          flexDirection: ['column', 'row'],
          alignItems: ['flex-start', 'center'],
          '& .MuiCardHeader-action': { mb: 0 },
          '& .MuiCardHeader-content': { mb: [2, 0] }
        }}
      />
      <CardContent
        className='rounded-md'
        sx={{
          backgroundColor: '#ffffff'
        }}
      >
        <AppReactApexCharts type='scatter' width='100%' height={400} options={options} series={series} />
      </CardContent>
    </Card>
  )
}

export default ScatterChart
