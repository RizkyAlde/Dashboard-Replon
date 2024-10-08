'use client'

// React Imports
import { useState } from 'react'

// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Tab from '@mui/material/Tab'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import Typography from '@mui/material/Typography'
import { useColorScheme, useTheme } from '@mui/material/styles'

// Third Party Imports
import classnames from 'classnames'

import CustomAvatar from '@core/components/mui/Avatar'

// Util Imports
import { rgbaToHex } from '@/utils/rgbaToHex'

// Styled Component Imports
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

// Vars
const tabData = [
  {
    type: 'temperature',
    avatarIcon: 'tabler-temperature',
    series: [{ data: [28, 10, 46, 38, 15, 30, 35, 28, 8, 28, 10, 46, 38, 15, 30, 35, 28, 8, 28, 10, 46, 38, 15, 30] }]
  },
  {
    type: 'air',
    avatarIcon: 'tabler-air-conditioning',
    series: [{ data: [35, 25, 15, 40, 42, 25, 48, 8, 30, 28, 10, 46, 38, 15, 30, 35, 28, 8, 28, 10, 46, 38, 15, 30] }]
  },
  {
    type: 'earth',
    avatarIcon: 'tabler-fire-hydrant',
    series: [{ data: [10, 22, 27, 33, 42, 32, 27, 22, 8, 28, 10, 46, 38, 15, 30, 35, 28, 8, 28, 10, 46, 38, 15, 30] }]
  },
  {
    type: 'lux',
    avatarIcon: 'tabler-sun',
    series: [{ data: [5, 9, 12, 18, 20, 25, 30, 36, 48, 28, 10, 46, 38, 15, 30, 35, 28, 8, 28, 10, 46, 38, 15, 30] }]
  }
]

const renderTabs = value => {
  return tabData.map((item, index) => (
    <Tab
      key={index}
      value={item.type}
      className='mie-4'
      label={
        <div
          className={classnames(
            'flex flex-col items-center justify-center gap-2 is-[110px] bs-[100px] border rounded-xl',
            item.type === value ? 'border-solid border-[#AED260]' : 'border-dashed'
          )}
        >
          <CustomAvatar variant='rounded' skin='light' size={38} {...(item.type === value && { color: 'warning' })}>
            <i className={classnames('text-[22px]', { 'text-textSecondary': item.type !== value }, item.avatarIcon)} />
          </CustomAvatar>
          <Typography className='font-medium capitalize' color='text.primary'>
            {item.type}
          </Typography>
        </div>
      }
    />
  ))
}

const renderTabPanels = (value, theme, options, colors) => {
  return tabData.map((item, index) => {
    const max = Math.max(...item.series[0].data)
    const seriesIndex = item.series[0].data.indexOf(max)

    const finalColors = colors.map((color, i) => (seriesIndex === i ? '#AED260' : color))

    return (
      <TabPanel key={index} value={item.type} className='!p-0'>
        <AppReactApexCharts
          type='line'
          height={233}
          options={{ ...options, colors: finalColors }}
          series={item.series}
        />
      </TabPanel>
    )
  })
}

const TabsPerHour = () => {
  // States
  const [value, setValue] = useState('temperature')

  // Hooks
  const theme = useTheme()
  const { mode } = useColorScheme()

  // Vars
  const _mode = (mode === 'system' ? serverMode : mode) || 'light'
  const disabledText = rgbaToHex(`rgb(${theme.mainColorChannels[_mode]} / 0.4)`)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

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
      <CardHeader title='Overview' subheader='Overview of Temperature, Humidity, and Pressure' />
      <CardContent>
        <TabContext value={value}>
          <TabList
            variant='scrollable'
            scrollButtons='auto'
            onChange={handleChange}
            aria-label='overview tabs'
            className='!border-0 mbe-10'
            sx={{
              '& .MuiTabs-indicator': { display: 'none !important' },
              '& .MuiTab-root': { padding: '0 !important', border: '0 !important' }
            }}
          >
            {renderTabs(value)}
          </TabList>
          {renderTabPanels(value, theme, options, colors)}
        </TabContext>
      </CardContent>
    </Card>
  )
}

export default TabsPerHour
