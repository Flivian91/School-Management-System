"use client"
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function ViewResultsPage() {
  const data = {
    labels: ["Chairman", "Secretary", "Treasurer"],
    datasets: [
      {
        label: "Votes",
        data: [120, 95, 78],
        backgroundColor: ["#4F46E5", "#06B6D4", "#F59E0B"],
        borderRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Election Results",
      },
    },
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl p-6 bg-white rounded-2xl shadow-lg">
        <h1 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          View Results
        </h1>
        <div className="mb-8">
          <Bar data={data} options={options} />
        </div>
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-700">Detailed Results</h2>
          <ul className="divide-y divide-gray-200">
            <li className="flex justify-between items-center py-2">
              <span className="text-sm font-medium text-gray-600">Chairman</span>
              <span className="text-sm font-bold text-gray-700">120 Votes</span>
            </li>
            <li className="flex justify-between items-center py-2">
              <span className="text-sm font-medium text-gray-600">Secretary</span>
              <span className="text-sm font-bold text-gray-700">95 Votes</span>
            </li>
            <li className="flex justify-between items-center py-2">
              <span className="text-sm font-medium text-gray-600">Treasurer</span>
              <span className="text-sm font-bold text-gray-700">78 Votes</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
