import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Medication {
  id: number;
  name: string;
  dosage: string;
  frequency: string;
  time: string;
  status: 'pending' | 'due' | 'taken' | 'missed';
  lastTaken?: string;
  notes?: string;
}

interface MedicationState {
  medications: Medication[];
}

const initialState: MedicationState = {
  medications: [
    { id: 1, name: 'Aspirin', dosage: '100mg', frequency: 'Daily', time: '8:00 AM', status: 'pending' },
    { id: 2, name: 'Vitamin D', dosage: '1000 IU', frequency: 'Daily', time: '12:00 PM', status: 'pending' },
    { id: 3, name: 'Ibuprofen', dosage: '400mg', frequency: 'As needed', time: '6:00 PM', status: 'pending' },
  ],
};

const medicationSlice = createSlice({
  name: 'medications',
  initialState,
  reducers: {
    updateMedicationStatus(state, action: PayloadAction<{ id: number; status: 'pending' | 'due' | 'taken' | 'missed'; notes?: string }>) {
      const medication = state.medications.find(med => med.id === action.payload.id);
      if (medication) {
        medication.status = action.payload.status;
        medication.lastTaken = action.payload.status === 'taken' ? new Date().toISOString() : medication.lastTaken;
        medication.notes = action.payload.notes || medication.notes;
      }
    },
    addMedication(state, action: PayloadAction<Omit<Medication, 'id' | 'status'>>) {
      const newId = Math.max(...state.medications.map(med => med.id), 0) + 1;
      state.medications.push({ ...action.payload, id: newId, status: 'pending' });
    },
    editMedication(state, action: PayloadAction<Medication>) {
      const index = state.medications.findIndex(med => med.id === action.payload.id);
      if (index !== -1) {
        state.medications[index] = action.payload;
      }
    },
    deleteMedication(state, action: PayloadAction<number>) {
      state.medications = state.medications.filter(med => med.id !== action.payload);
    },
  },
});

export const { updateMedicationStatus, addMedication, editMedication, deleteMedication } = medicationSlice.actions;
export default medicationSlice.reducer;