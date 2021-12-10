import React from "react";
import Chart from "react-apexcharts";

export const GraphChartAnalytics = () => {
  const chartOptions = {
    series: [
      {
        data: [10, 12, 5, 6, 2, 15, 9],
      },
    ],
    options: {
      chart: {
        height: "100%", 
        type: "bar",
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["rgb(63,176,242)"],
      grid: {
        borderColor: "transparent",
        strokeDashArray: 5,
        colors: ["white"],
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
        padding: {
          top: -20,
          bottom: -10,
        },
      },
      stroke: {
        width: 3,
      },

      xaxis: {
        labels: {
          show: true,
          style: {
            fontSize: "0px",
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: false,
      },
      tooltip: {
        x: {
          show: false,
        },
      },
    },
  };
  return (
    <>
      <Chart
        options={chartOptions.options}
        series={chartOptions.series}
        type="line"
        width="100%"
        height="110px"
      />
    </>
  );
};
