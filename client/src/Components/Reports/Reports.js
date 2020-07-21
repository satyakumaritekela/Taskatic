import React from "react";
import { Bar } from "react-chartjs-2";
import "./Reports.scss";
import ProjectDetail from "../Projects/ProjectDetail/ProjectDetail";

export const Reports = () => {
  const chartData = {
    labels: ["Sprint-1", "Sprint-2", "Sprint-3", "Sprint-4"],
    datasets: [
      {
        label: "Committed",
        backgroundColor: "blue",
        data: [22, 24, 25, 22],
      },
      {
        label: "Completed",
        backgroundColor: "green",
        data: [18, 24, 23, 21],
      },
      {
        label: "Technical Debt",
        backgroundColor: "red",
        data: [3, 0, 2, 1],
      },
    ],
  };
  return (
    <ProjectDetail>
      <main className="ProjectDetailMain">
        <div className="chart-container">
          <div className="projectSprintHeading">Velocity Chart</div>
          <div className="chart">
            <Bar
              data={chartData}
              options={{
                scales: {
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                      },
                    },
                  ],
                },
              }}
            />
          </div>
        </div>
      </main>
    </ProjectDetail>
  );
};
