import React, { useState, useEffect } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm } from 'react-hook-form';
import CustomDatePicker from '../atomic/CustomDatePicker';
import Input from '../atomic/Input';
import { isNumberBetween17and100, isDateXDaysInThePast } from '../../services/validationService';

export default function ApplicationForm() {
  const { control, handleSubmit, register,   formState: { errors } } = useForm();

  const [data, setData] = useState(null);

  useEffect(() => {
    console.log('IN USE EFFECT', data);
  }, [data]);

  return (
    <form className="form" onSubmit={handleSubmit((data) => setData(data))}>
      <div className="container">
        <Input
          className="input-field"
          name="age"
          placeholderText="Enter age"
          label="Age"
          control={control}
          register={register}
          required={"Age is required"}
          validator={isNumberBetween17and100}
          errors={errors}
        />

        <CustomDatePicker
          className="input-field"
          name="startDate"
          placeholderText="Enter date"
          label="Start Date"
          control={control}
          validator={isDateXDaysInThePast}
          errors={errors}
        />
      </div>
      <input className="submit-btn" type="submit" value="Submit" />
    </form>
  );
}
