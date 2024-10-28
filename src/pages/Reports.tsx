import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Reports: React.FC = () => {
  const data = [
    { name: 'Mon', adherence: 90 },
    { name: 'Tue', adherence: 95 },
    { name: 'Wed', adherence: 100 },
    { name: 'Thu', adherence: 85 },
    { name: 'Fri', adherence: 90 },
    { name: 'Sat', adherence: 80 },
    { name: 'Sun', adherence: 95 },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Reports & Analytics</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Weekly Adherence</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="adherence" fill="#3B82F6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Monthly Summary</h2>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span>Total Medications:</span>
              <span className="font-semibold">15</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Doses Taken:</span>
              <span className="font-semibold">87</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Doses Missed:</span>
              <span className="font-semibold text-red-500">3</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Overall Adherence:</span>
              <span className="font-semibold text-green-500">96.7%</span>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Top Medications</h2>
          <ul className="space-y-2">
            <li className="flex justify-between items-center">
              <span>Aspirin</span>
              <span className="text-sm text-gray-500">30 doses</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Vitamin D</span>
              <span className="text-sm text-gray-500">30 doses</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Ibuprofen</span>
              <span className="text-sm text-gray-500">15 doses</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Reports;