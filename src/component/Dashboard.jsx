import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import Sidebar from "./Sidebar";
const data = [
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  // Add more data points as needed
];
const Dashboard = () => {
  const percentage = 75;
  return (
    <div className="xl:flex lg:flex h-screen bg-gray-900">
      <Sidebar />
      <div className="bg-gray-800 w-64 p-4 sm:hidden md:hidden   text-gray-400">
        <h2 className="text-xl font-bold text-red-500 mb-4">Admin</h2>
        <ul className="flex flex-col space-y-4 gap-7">
          <li>
            <a href="#" className="flex items-center">
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center">
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              User Management
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center">
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 01-4 4h-2.586a1 1 0 01-.707-.293l-2.457-2.457A1 1 0 004.414 7H3a2 2 0 00-2 2v4a2 2 0 002 2h4.586a1 1 0 00.707-.293l2.457-2.457A1 1 0 0116 11z"
                />
              </svg>
              Creator Management
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center">
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2-6h-2m2-2v8m-3-1c0 1.654-.126 3.223-.376 4.691a2.106 2.106 0 01-.803 1.583A2.106 2.106 0 017 21H5a2.106 2.106 0 01-1.803-1.583A2.106 2.106 0 013 16.491V14a2.106 2.106 0 01.376-4.691c.25-1.468.523-2.894.803-4.291a2.106 2.106 0 011.583-.803A2.106 2.106 0 019 7h.01c1.654 0 3.223.126 4.691.376a2.106 2.106 0 011.583.803A2.106 2.106 0 0121 10.991v.01H19a2.106 2.106 0 01-1.803 1.583A2.106 2.106 0 0117 16.491V14a2.106 2.106 0 01.803-4.291c.28-1.402.542-2.827.803-4.291a2.106 2.106 0 011.583-.803A2.106 2.106 0 0121 7h.01c1.654 0 3.223.126 4.691.376a2.106 2.106 0 011.583.803A2.106 2.106 0 0125 10.991v.01"
                />
              </svg>
              Content Management
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center">
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Financial Management
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center ">
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Engagement Analytics
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center">
              <svg
                className="w-6 h-6 "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18 9v3m0 0v3m0-6h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
              Site Policies
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center">
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 10h6M5 10l4 4M9 16h6"
                />
              </svg>
              Blog Management
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center">
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 20l9-5-9-5-9 5 9 5zm0 0v-9l-9-5 9-5 9 5-9 5v9z"
                />
              </svg>
              App Settings
            </a>
          </li>
        </ul>
      </div>

      <div className="flex-1 sm:flex sm:flex-col md:flex md:flex-col  p-4">
        <div className="flex justify-between items-center sm:flex md:flex mb-4  ">
          <h2 className="text-2xl font-bold text-white">
            Engagement Analytics
          </h2>
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37a1.724 1.724 0 002.573-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
        <div className="  gap-10 md:flex md:flex-col  sm:flex sm:flex-col h-[262px] ">
          <div className="flex gap-10 sm:flex sm:flex-col md:flex md:flex-col xl:px-7">
            <div className="flex-1 bg-gray-700 rounded-lg p-4 items-center  sm:w-[90vw] md:w-[90vw] lg:w-[70vw] xl:w-[10vw]">
              <h3 className="text-xl font-bold text-white mb-2">
                Creator Management
              </h3>
              <div className="w-full sm:w-[80vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw]">
                <LineChart width={300} height={200} data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                  <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                </LineChart>
              </div>

              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                  <span className="text-gray-400">Online Creator</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-gray-500 rounded-full mr-2"></div>
                  <span className="text-gray-400">Offline Creator</span>
                </div>
              </div>
            </div>

            <div className="flex-1 bg-gray-700 rounded-lg p-4">
              <h3 className="text-xl font-bold text-white mb-2">
                Content Chart
              </h3>
              <div className="flex justify-center items-center">
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                  className="h-[200px]"
                  styles={buildStyles({
                    textColor: "#f9304d",
                    trailColor: "#f9304d",
                    backgroundColor: "#f9304d",
                  })}
                />
                ;
              </div>
              <div className="mt-4">
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-400">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                    <span>Paid Content</span>
                    <span className="ml-auto">125,000 users</span>
                  </li>
                  <li className="flex items-center text-gray-400">
                    <div className="w-2 h-2 bg-gray-500 rounded-full mr-2"></div>
                    <span>By Search</span>
                    <span className="ml-auto">2750 users</span>
                  </li>
                  <li className="flex items-center text-gray-400">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mr-2"></div>
                    <span>Other</span>
                    <span className="ml-auto">948,213 users</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex gap-10  sm:flex sm:flex-col md:flex md:flex-col xl:m-8 ">
            <div className="flex-1 bg-gray-700 rounded-lg p-4">
              <h3 className="text-xl font-bold text-white mb-2">
                User Leaderboard
              </h3>
              <ul className="space-y-4">
                <li className="flex  items-center">
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&h=80&q=80"
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-gray-200 font-bold">Jesse Thomas</h4>
                    <p className="text-gray-400">637 Points - 98% Correct</p>
                  </div>

                  <span className="ml-auto text-green-500 font-bold">1 A</span>
                </li>
                <li className="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&h=80&q=80"
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-gray-200 font-bold">Jesse Thomas</h4>
                    <p className="text-gray-400">637 Points - 98% Correct</p>
                  </div>

                  <span className="ml-auto text-green-500 font-bold">1 A</span>
                </li>
                <li className="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&h=80&q=80"
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-gray-200 font-bold">Jesse Thomas</h4>
                    <p className="text-gray-400">637 Points - 98% Correct</p>
                  </div>

                  <span className="ml-auto text-green-500 font-bold">1 A</span>
                </li>
                <li className="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&h=80&q=80"
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-gray-200 font-bold">Jesse Thomas</h4>
                    <p className="text-gray-400">637 Points - 98% Correct</p>
                  </div>

                  <span className="ml-auto text-green-500 font-bold">1 A</span>
                </li>
                <li className="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&h=80&q=80"
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-gray-200 font-bold">Jesse Thomas</h4>
                    <p className="text-gray-400">637 Points - 98% Correct</p>
                  </div>

                  <span className="ml-auto text-green-500 font-bold">1 A</span>
                </li>
              </ul>
            </div>
            <div className="flex-1 bg-gray-700 rounded-lg p-4">
              <h3 className="text-xl font-bold text-white mb-2">
                Content Leaderboard
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div>
                    <h4 className="text-gray-200 font-bold">
                      Lorem Ipsum is simply dummy
                    </h4>
                    <p className="text-gray-400">
                      52 Points / User - 97% Correct
                    </p>
                  </div>
                  <span className="ml-auto text-green-500 font-bold">1 A</span>
                </li>
              </ul>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div>
                    <h4 className="text-gray-200 font-bold">
                      Lorem Ipsum is simply dummy
                    </h4>
                    <p className="text-gray-400">
                      52 Points / User - 97% Correct
                    </p>
                  </div>
                  <span className="ml-auto text-green-500 font-bold">1 A</span>
                </li>
              </ul>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div>
                    <h4 className="text-gray-200 font-bold">
                      Lorem Ipsum is simply dummy
                    </h4>
                    <p className="text-gray-400">
                      52 Points / User - 97% Correct
                    </p>
                  </div>
                  <span className="ml-auto text-green-500 font-bold">1 A</span>
                </li>
              </ul>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div>
                    <h4 className="text-gray-200 font-bold">
                      Lorem Ipsum is simply dummy
                    </h4>
                    <p className="text-gray-400">
                      52 Points / User - 97% Correct
                    </p>
                  </div>
                  <span className="ml-auto text-green-500 font-bold">1 A</span>
                </li>
              </ul>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div>
                    <h4 className="text-gray-200 font-bold">
                      Lorem Ipsum is simply dummy
                    </h4>
                    <p className="text-gray-400">
                      52 Points / User - 97% Correct
                    </p>
                  </div>
                  <span className="ml-auto text-green-500 font-bold">1 A</span>
                </li>
              </ul>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div>
                    <h4 className="text-gray-200 font-bold">
                      Lorem Ipsum is simply dummy
                    </h4>
                    <p className="text-gray-400">
                      52 Points / User - 97% Correct
                    </p>
                  </div>
                  <span className="ml-auto text-green-500 font-bold">1 A</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
