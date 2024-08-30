import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export const useOverview = () => {
  return useQuery({
    queryFn: async () => {
      const res = await axios.get(`https://backend-monitoring.vercel.app/overview/gh_home`)
      return res.data
    },
    queryKey: ['overview-all-gh'],
    keepPreviousData: true
  })
}
