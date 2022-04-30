import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import CustomDatePicker from '../atomic/CustomDatePicker';
import Input from '../atomic/Input';
import 'react-datepicker/dist/react-datepicker.css';

export default function ApplicationForm() {
  const { control, handleSubmit, register } = useForm();
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log('IN USE EFFECT', data);
  }, [data]);

  return (
    <form className="form" onSubmit={handleSubmit((data) => setData(data))}>
      <div className="container">
        <Input
          name="age"
          placeholderText="Enter Age"
          label="Age"
          control={control}
          register={register}
          className="input-field"
        />
        {
          <CustomDatePicker
            name="startDate"
            placeholderText="Enter Date"
            label="Start Date"
            control={control}
            className="input-field"
          />
        }
      </div>
      <input className="submit-btn" type="submit" value="Submit" />
    </form>

  );
}
