import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Calendar, Clock, AlertCircle } from 'lucide-react';
import MedicationItem from '../components/MedicationItem';

const Dashboard: React.FC = () => {
  const medications = useSelector((state: RootState) => state.medications.medications);

  const todayMedications = medications.filter(med => med.status === 'pending' || med.status === 'due');
  const takenMedications = medications.filter(med => med.status === 'taken');
  const missedMedications = medications.filter(med => med.status === 'missed');

  const adherenceRate = (takenMedications.length / (takenMedications.length + missedMedications.length)) * 100 || 0;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DashboardCard
          title="Today's Medications"
          icon={<Calendar className="h-8 w-8 text-blue-500" />}
          content={
            <div className="space-y-4">
              {todayMedications.map(med => (
                <MedicationItem key={med.id} {...med} />
              ))}
            </div>
          }
        />
        <DashboardCard
          title="Medication Status"
          icon={<Clock className="h-8 w-8 text-green-500" />}
          content={
            <div className="space-y-2">
              <p>Taken: {takenMedications.length}</p>
              <p>Missed: {missedMedications.length}</p>
              <p>Pending: {todayMedications.length}</p>
            </div>
          }
        />
        <DashboardCard
          title="Adherence Stats"
          icon={<AlertCircle className="h-8 w-8 text-yellow-500" />}
          content={
            <div className="space-y-2">
              <p>Today's Adherence: {adherenceRate.toFixed(1)}%</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${adherenceRate}%` }}></div>
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
};

const DashboardCard: React.FC<{ title: string; icon: React.ReactNode; content: React.ReactNode }> = ({ title, icon, content }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <div className="flex items-center space-x-3 mb-4">
      {icon}
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
    </div>
    {content}
  </div>
);

export default Dashboard;