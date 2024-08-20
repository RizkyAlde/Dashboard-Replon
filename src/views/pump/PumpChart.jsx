'use client'

// React Imports
import { useState } from 'react'

// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { useColorScheme, useTheme } from '@mui/material/styles'

// Util Imports
import { rgbaToHex } from '@/utils/rgbaToHex'

// Styled Component Imports
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

// Vars
const tabData = [
  {
    type: 'temperature',
    avatarIcon: 'tabler-temperature',
    series: [{ data: [1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1] }]
  }
]

const PumpChart = () => {
  // States
  const [value, setValue] = useState('temperature')

  // Hooks
  const theme = useTheme()
  const { mode } = useColorScheme()

  // Vars
  const _mode = (mode === 'system' ? serverMode : mode) || 'light'
  const disabledText = rgbaToHex(`rgb(${theme.mainColorChannels[_mode]} / 0.4)`)

  const colors = Array(24).fill('#AED260')

  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    legend: { show: true },
    tooltip: { enabled: true },
    dataLabels: {
      offsetY: -11,
      formatter: val => `${val}`,
      style: {
        fontWeight: 500,
        colors: ['#AED260'],
        fontSize: theme.typography.body1.fontSize
      }
    },
    colors,
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    grid: {
      show: true,
      padding: {
        top: -19,
        left: -4,
        right: 0,
        bottom: -11
      }
    },
    xaxis: {
      axisTicks: { show: true },
      axisBorder: { color: rgbaToHex(`rgb(${theme.mainColorChannels[_mode]} / 0.12)`) },
      categories: [
        '00.00',
        '01.00',
        '02.00',
        '03.00',
        '04.00',
        '05.00',
        '06.00',
        '07.00',
        '08.00',
        '09.00',
        '10.00',
        '11.00',
        '12.00',
        '13.00',
        '14.00',
        '15.00',
        '16.00',
        '17.00',
        '18.00',
        '19.00',
        '20.00',
        '21.00',
        '22.00',
        '23.00'
      ],
      labels: {
        style: {
          colors: disabledText,
          fontFamily: theme.typography.fontFamily,
          fontSize: theme.typography.body2.fontSize
        }
      },
      rotate: -45
    },
    yaxis: {
      labels: {
        offsetX: -18,
        formatter: val => `${val}`,
        style: {
          colors: disabledText,
          fontFamily: theme.typography.fontFamily,
          fontSize: theme.typography.body2.fontSize
        }
      }
    },
    responsive: [
      {
        breakpoint: 1450,
        options: {
          plotOptions: {
            bar: { columnWidth: '45%' }
          }
        }
      },
      {
        breakpoint: 600,
        options: {
          dataLabels: {
            style: {
              fontSize: theme.typography.body2.fontSize
            }
          },
          plotOptions: {
            bar: { columnWidth: '58%' }
          }
        }
      },
      {
        breakpoint: 500,
        options: {
          plotOptions: {
            bar: { columnWidth: '70%' }
          }
        }
      }
    ]
  }

  return (
    <Card>
      <CardHeader title='Overview' subheader='Overview of production' />
      <CardContent>
        <AppReactApexCharts type='line' height={233} options={{ ...options }} series={tabData[0].series} />
      </CardContent>
    </Card>
  )
}

export default PumpChart
