import React from "react";
import Chart from "react-apexcharts";

const GraphChart = () => {
  const chartOptions = {
    series: [
      {
        name: "Website Visits",
        data: [44, 55, 57, 56, 61, 58, 63],
      },
    ],
    options: {
      chart: {
        height: "100%",
        background: "transparent",
        type: "bar",
      },
      plotOptions: {
        bar: {
          borderRadius: 8,
          horizontal: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#0b7ae1"],
      xaxis: {
        categories: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
      },
      legend: {
        position: "top",
        horizontalAlign: "left",
        offsetX: 40,
      },
    },
  };
  return (
    <>
      <Chart
        options={chartOptions.options}
        series={chartOptions.series}
        type="area"
        width="100%"
        height="350px"
      />
    </>
  );
};
export const PieChart = () => {
  const PieChartOptions = {
    series: [15, 5, 6, 13],
    options: {
      chart: {
        width: 380,
        type: "donut",
        color: "white",
      },
      dataLabels: {
        enabled: false,
        color: "white",
      },
      labels: ["Landing Page", "About Page", "Contact Page", "Services Page"],
      color: "white",
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
              color: "white",
            },
          },
        },
      ],
    },
  };
  return (
    <>
      <Chart
        options={PieChartOptions.options}
        series={PieChartOptions.series}
        type={PieChartOptions.options.chart.type}
      />
    </>
  );
};
export const DashChart = () => {
  const DashChartOptions = {
    series: [
      {
        name: "Website Visits",
        data: [44, 55, 57, 56, 61, 58, 63],
      },
      {
        name: "Forms Submitted",
        data: [76, 85, 101, 98, 87, 105, 91],
      },
      {
        name: "Customers",
        data: [35, 41, 36, 26, 45, 48, 52],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
          borderRadius: 3,
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#0b7ae1", "#B41509", "#A724DA"],
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
      },
      yaxis: {
        title: {
          text: "value",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val;
          },
        },
      },
    },
  };
  return (
    <>
      <Chart
        options={DashChartOptions.options}
        series={DashChartOptions.series}
        type={DashChartOptions.options.chart.type}
        height="350px"
      />
    </>
  );
};
export const GraphChart2 = () => {
  const chartOptions = {
    series: [
      {
        name: "Forms Submitted",
        data: [44, 25, 57, 56, 61, 8, 3],
      },
    ],
    options: {
      chart: {
        height: "100%",
        background: "transparent",
        type: "bar",
      },
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 4,
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#E11A0B"],
      xaxis: {
        categories: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
      },
      legend: {
        position: "top",
        horizontalAlign: "left",
        offsetX: 40,
      },
    },
  };
  return (
    <>
      <Chart
        options={chartOptions.options}
        series={chartOptions.series}
        type="area"
        width="100%"
        height="330px"
      />
    </>
  );
};

export default GraphChart;
