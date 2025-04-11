import Chart from 'react-apexcharts';

const PriceComparisonChart = () => {
  const chartOptions = {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false
      },
      animations: {
        enabled: true,
      },
    },
    series: [{
      name: 'Prices',
      data: [700, 1000, 800]
    }],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '25px',
        borderRadius: 0,
      }
    },
    colors: ['#2563eb', '#2563eb', '#ff0000'], // Changed last color to pure red
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ['Typical Window Project', 'Competitor Price', 'Our Company'],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        style: {
          colors: '#6b7280',
          fontSize: '14px',
          fontFamily: 'Inter, sans-serif',
        }
      }
    },
    yaxis: {
      min: 0,
      max: 1000,
      tickAmount: 5,
      labels: {
        formatter: (value: number) => `$${value}`,
        style: {
          colors: '#6b7280',
          fontSize: '12px',
          fontFamily: 'Inter, sans-serif',
        }
      }
    },
    grid: {
      borderColor: '#e5e7eb',
      padding: {
        left: 20,
        right: 20
      }
    },
    states: {
      hover: {
        filter: {
          type: 'darken',
          value: 0.9
        }
      }
    },
    tooltip: {
      custom: ({ seriesIndex, dataPointIndex, w }: any) => {
        const category = w.globals.categoryLabels[dataPointIndex];
        const value = w.globals.series[seriesIndex][dataPointIndex];
        return `
          <div class="apexcharts-tooltip-custom bg-white rounded-md shadow-lg p-2 border border-gray-200">
            <div class="font-semibold text-gray-700">${category}</div>
            <div class="text-lg font-bold text-gray-900">$${value}</div>
          </div>
        `;
      }
    },
    responsive: [{
      breakpoint: 640,
      options: {
        plotOptions: {
          bar: {
            columnWidth: '20px'
          }
        },
        xaxis: {
          labels: {
            style: {
              fontSize: '12px'
            }
          }
        },
        yaxis: {
          labels: {
            style: {
              fontSize: '10px'
            }
          }
        }
      }
    }]
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
      <div className="text-lg font-semibold text-gray-800 mb-4">
        Price Comparison
      </div>
      <Chart
        options={chartOptions as any}
        series={chartOptions.series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default PriceComparisonChart;