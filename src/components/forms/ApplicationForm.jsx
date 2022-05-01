import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm } from 'react-hook-form';
import CustomDatePicker from '../atomic/CustomDatePicker';
import Input from '../atomic/Input';
import {
  isNumberBetween17and100,
  isEmailValid,
  minStartDate,
} from '../../services/validationService';

export default function ApplicationForm() {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  return (
    <form className="form" onSubmit={handleSubmit((data) => {
      console.log('SETTING DATA', data);
    })}>
      <div className="container">
        <Input
          className="input-field"
          name="age"
          placeholderText="Enter age"
          label="Age"
          register={register}
          required={true}
          validator={isNumberBetween17and100}
          errors={errors}
          errorMessage={'Age is invalid'}
        />

        <Input
          className="input-field"
          name="email"
          placeholderText="Enter email"
          label="Email"
          register={register}
          required={true}
          validator={isEmailValid}
          errors={errors}
          errorMessage={'Email is invalid'}
        />

        <CustomDatePicker
          className="form-group input-field"
          name="startDate"
          placeholderText="Enter date"
          label="Start Date"
          control={control}
          required={true}
          errors={errors}
          minStartDate={minStartDate(30)}
          errorMessage={'Start date is invalid'}
        />
      </div>
      <input className="submit-btn" type="submit" value="Submit" />
    </form>
  );
}
