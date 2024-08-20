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
  series1: '#ff9f43',
}

const series = [
  {
    name: 'humidity',
    data: [
      { x: 14.0, y: 290 },
      { x: 13.0, y: 190 },
      { x: 20.0, y: 220 },
      { x: 21.0, y: 350 },
      { x: 21.5, y: 290 },
      { x: 22.0, y: 220 },
      { x: 23.0, y: 140 },
      { x: 19.0, y: 400 },
      { x: 20.0, y: 200 },
      { x: 22.0, y: 90 },
      { x: 20.0, y: 120 }
    ]
  }
]

const ScatterVs = () => {
  // Hooks
  const theme = useTheme()
  const { mode } = useColorScheme()

  // Vars
  const _mode = (mode === 'system' ? serverMode : mode) || "light"
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
        formatter: val => parseFloat(val).toFixed(1)
      }
    }
  }

  return (
    <AppReactApexCharts type='scatter' width='100%' height={400} options={options} series={series} />
  )
}

export default ScatterVs
