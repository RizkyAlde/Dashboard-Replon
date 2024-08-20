import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetMonitoring = (gr) => {
  return useQuery({
    queryFn: async () => {
      const res = await axios.get(`https://backend-monitoring.vercel.app/monitoring/node${gr}`);
      return res.data;
    },
    queryKey: ['monitoring', gr],
    keepPreviousData: true,
  });
}
