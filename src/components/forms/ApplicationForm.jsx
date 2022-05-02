import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { parseISO } from 'date-fns';
import CustomDatePicker from '../atomic/CustomDatePicker';
import Input from '../atomic/Input';
import {
  isNumberBetween,
  isEmailValid,
  minStartDate,
} from '../../services/validationService';
import { updateApplicationForm, selectApplicationForm } from './applicationFormSlice';

let ageRange = isNumberBetween(17, 100);

export default function ApplicationForm() {
  console.log('Rendering ApplicationForm');
  const applicationForm = useSelector(selectApplicationForm);
  console.log('applicationForm', applicationForm);
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: Object.entries(applicationForm).length
      ? {
          age: applicationForm.age,
          email: applicationForm.email,
          startDate: parseISO(applicationForm.startDate),
        }
      : {},
  });

  return (
    <form
      className="form"
      onSubmit={handleSubmit((data) => {
        dispatch(updateApplicationForm(data));
      })}
    >
      <div className="container">
        <Input
          className="input-field"
          name="age"
          placeholderText="Enter age"
          label="Age"
          register={register}
          required={true}
          validator={ageRange}
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
