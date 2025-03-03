import { useGetDashboardMetricsQuery } from '@/state/api';

const colors = ["#00c49f", "0088fe", "ffbb28"]


const CardExpenseSummary = () => {
  const { data: dashboardMetrics, isLoading } = useGetDashboardMetricsQuery();
  return (
    <div className='row-span-3 bg-white, shadow-md rounded-2xl flex flex-col justify-between'>
      {isLoading ?
        (<div className='m-5'>Loading...</div>)
        : (
          <> </>
        )
      }
    </div>
  )
}

export default CardExpenseSummary