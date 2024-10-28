import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateMedicationStatus } from '../store/medicationSlice';
import { Check, X, AlertCircle, Clock } from 'lucide-react';

interface MedicationItemProps {
  id: number;
  name: string;
  dosage: string;
  time: string;
  status: 'pending' | 'due' | 'taken' | 'missed';
}

const MedicationItem: React.FC<MedicationItemProps> = ({ id, name, dosage, time, status }) => {
  const dispatch = useDispatch();
  const [notes, setNotes] = useState('');

  const handleStatusUpdate = (newStatus: 'taken' | 'missed') => {
    dispatch(updateMedicationStatus({ id, status: newStatus, notes }));
    setNotes('');
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'pending':
        return <Clock className="h-5 w-5 text-gray-400" />;
      case 'due':
        return <AlertCircle className="h-5 w-5 text-yellow-500" />;
      case 'taken':
        return <Check className="h-5 w-5 text-green-500" />;
      case 'missed':
        return <X className="h-5 w-5 text-red-500" />;
    }
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
      <div className="flex items-center space-x-4">
        {getStatusIcon()}
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-600">{dosage} - {time}</p>
        </div>
      </div>
      {status === 'pending' || status === 'due' ? (
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Add notes"
            className="border rounded px-2 py-1 text-sm"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
          <button
            onClick={() => handleStatusUpdate('taken')}
            className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
          >
            Take
          </button>
          <button
            onClick={() => handleStatusUpdate('missed')}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            Miss
          </button>
        </div>
      ) : (
        <button
          onClick={() => dispatch(updateMedicationStatus({ id, status: 'pending' }))}
          className="text-blue-500 hover:text-blue-600"
        >
          Undo
        </button>
      )}
    </div>
  );
};

export default MedicationItem;