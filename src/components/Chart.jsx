import React from "react";
import Chart from "react-apexcharts";

const options = {
  chart: {
    id: "area-chart",
    fontFamily: "inherit",
    type: "area",
    height: 150,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    sparkline: {
      enabled: true,
    },
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    crosshairs: {
      show: true,
      position: "front",
      stroke: {
        color: "#E4E6EF",
        width: 1,
        dashArray: 3,
      },
    },
    tooltip: {
      enabled: false,
    },
    convertedCatToNumeric: true,
  },
  yaxis: {
    labels: {
      show: false,
      style: {
        colors: "#181C32",
        fontSize: "12px",
      },
    },
  },
};

const ChartComponent = () => {
  function generateData(days) {
    const series = [];
    const now = new Date();
    for (let i = 0; i < days; i++) {
      const randomValue = Math.floor(Math.random() * 100) + 1;
      const date = new Date(now.getTime() - i * 24 * 60 * 60 * 1000);
      series.push([date.getTime(), randomValue]);
    }
    return series.reverse();
  }

  const chartData = generateData(7);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">User Activity</h2>
      <Chart
        options={options}
        series={[{ name: "Data", data: chartData, color: "#4CAF50" }]}
        type="area"
        height={220}
      />
    </div>
  );
};

export default ChartComponent;
