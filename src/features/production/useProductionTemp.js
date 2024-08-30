import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const useProductionTemp = gr => {
  return useQuery({
    queryFn: async () => {
      const res = await axios.get(`https://backend-monitoring.vercel.app/production/average/node${gr}`)
      return res.data
    },
    queryKey: ['production', gr],
    keepPreviousData: true
  })
}
