import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { addMedication, editMedication, deleteMedication } from '../store/medicationSlice';
import { Plus, Edit2, Trash2 } from 'lucide-react';
import MedicationItem from '../components/MedicationItem';

const MedicationManagement: React.FC = () => {
  const dispatch = useDispatch();
  const medications = useSelector((state: RootState) => state.medications.medications);
  const [isAddingMedication, setIsAddingMedication] = useState(false);
  const [newMedication, setNewMedication] = useState({ name: '', dosage: '', frequency: '', time: '' });

  const handleAddMedication = () => {
    dispatch(addMedication(newMedication));
    setNewMedication({ name: '', dosage: '', frequency: '', time: '' });
    setIsAddingMedication(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Medication Management</h1>
        <button
          onClick={() => setIsAddingMedication(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg flex items-center space-x-2"
        >
          <Plus className="h-5 w-5" />
          <span>Add Medication</span>
        </button>
      </div>
      {isAddingMedication && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Add New Medication</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Medication Name"
              className="w-full border rounded px-3 py-2"
              value={newMedication.name}
              onChange={(e) => setNewMedication({ ...newMedication, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Dosage"
              className="w-full border rounded px-3 py-2"
              value={newMedication.dosage}
              onChange={(e) => setNewMedication({ ...newMedication, dosage: e.target.value })}
            />
            <input
              type="text"
              placeholder="Frequency"
              className="w-full border rounded px-3 py-2"
              value={newMedication.frequency}
              onChange={(e) => setNewMedication({ ...newMedication, frequency: e.target.value })}
            />
            <input
              type="time"
              className="w-full border rounded px-3 py-2"
              value={newMedication.time}
              onChange={(e) => setNewMedication({ ...newMedication, time: e.target.value })}
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setIsAddingMedication(false)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleAddMedication}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
              >
                Add Medication
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="space-y-4">
        {medications.map((medication) => (
          <MedicationItem key={medication.id} {...medication} />
        ))}
      </div>
    </div>
  );
};

export default MedicationManagement;