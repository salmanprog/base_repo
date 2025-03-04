import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';
import ContentWrapper from '../../../components/shared/Layout/index';

function getLineChartData() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
      },
    },
  };
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Dataset',
        data: [0, 1, 5, 4, 3, 2, 4, 3, 7, 6, 2, 8],
        borderColor: 'hsla(210, 10%, 23%, 1)',
        backgroundColor: 'hsla(210, 10%, 23%, 0.5)',
      },
    ],
  };
  return { chartData, options }
}

function getDoughnutData() {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const doughnutData = {
    labels: ['Dataset'],
    datasets: [
      {
        label: 'Datasets',
        data: [12],
        backgroundColor: [
          'hsla(210, 10%, 23%, 0.5)'
        ],
        borderColor: [
          'hsla(210, 10%, 23%, 1)'
        ],
        borderWidth: 1,
      },
    ],
  };
  return doughnutData;
}


function Dashboard() {
  return (
      <ContentWrapper title={'Stats'}>
        <div className='row'>
          <div className='col-lg-8 col-12'>
            <Line options={getLineChartData().options} data={getLineChartData().chartData} />
          </div>
          <div className='col-lg-4 col-12'>
            <Doughnut data={getDoughnutData()} />
          </div>
        </div>
      </ContentWrapper>
  )
}

export default Dashboard;