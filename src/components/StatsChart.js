import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import { Pie, Bar } from "react-chartjs-2";
import vibeResults from "../data/vibeResults";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

function StatsChart({ stats, currentVibeId }) {
  if (!stats || stats.totalResponses === 0) {
    return (
      <div className="text-center p-8 bg-gray-50 rounded-lg">
        <p>Be the first to add your vibe to our stats!</p>
      </div>
    );
  }

  // Prepare the data for charts
  const vibeLabels = Object.values(vibeResults).map((vibe) => vibe.title);
  const vibeColors = Object.values(vibeResults).map((vibe) => {
    switch (vibe.color) {
      case "lofi":
        return "rgba(156, 180, 204, 0.8)";
      case "cosmic":
        return "rgba(106, 13, 173, 0.8)";
      case "cottage":
        return "rgba(167, 201, 87, 0.8)";
      case "chaos":
        return "rgba(255, 107, 107, a.8)";
      case "deep":
        return "rgba(44, 62, 80, 0.8)";
      default:
        return "rgba(128, 128, 128, 0.8)";
    }
  });

  const vibeBorderColors = vibeColors.map((color) => color.replace("0.8", "1"));

  // Calculate percentages
  const vibeData = Object.values(vibeResults).map((vibe) => {
    const count = stats.vibes[vibe.id]?.count || 0;
    return (count / stats.totalResponses) * 100;
  });

  const pieData = {
    labels: vibeLabels,
    datasets: [
      {
        data: vibeData,
        backgroundColor: vibeColors,
        borderColor: vibeBorderColors,
        borderWidth: 1,
      },
    ],
  };

  const barData = {
    labels: vibeLabels,
    datasets: [
      {
        label: "Percentage of Users",
        data: vibeData,
        backgroundColor: vibeColors,
        borderColor: vibeBorderColors,
        borderWidth: 1,
      },
    ],
  };

  // Find your vibe's percentage
  const yourVibeIndex = Object.values(vibeResults).findIndex(
    (vibe) => vibe.id === currentVibeId
  );
  const yourVibePercentage = vibeData[yourVibeIndex].toFixed(1);

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <p className="text-center mb-4">
        <span className="font-bold">{yourVibePercentage}%</span> of people share
        your vibe!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-center mb-2 font-bold">Vibe Distribution</h3>
          <Pie data={pieData} />
        </div>
        <div>
          <h3 className="text-center mb-2 font-bold">Vibe Comparison</h3>
          <Bar
            data={barData}
            options={{
              indexAxis: "y",
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  max: 100,
                  title: {
                    display: true,
                    text: "Percentage",
                  },
                },
              },
            }}
          />
        </div>
      </div>

      <p className="text-sm text-gray-500 mt-4 text-center">
        Based on {stats.totalResponses} total responses
      </p>
    </div>
  );
}

export default StatsChart;
