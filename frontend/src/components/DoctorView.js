import { useState } from 'react';
import { createRecord, fetchRecords } from '..';

export default function DoctorView() {
  const [records, setRecords] = useState([]);
  const [formData, setFormData] = useState({
    patient_id: '',
    record_type: '',
    value: {}
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createRecord(formData);
    const updatedRecords = await fetchRecords();
    setRecords(updatedRecords.data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Patient ID" 
          onChange={(e) => setFormData({...formData, patient_id: e.target.value})}
        />
        <button type="submit">Add Record</button>
      </form>
      <div>
        {records.map(record => (
          <div key={record._id}>
            <h3>{record.record_type}</h3>
            <p>{JSON.stringify(record.value)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}