import ReactDatePicker from 'react-datepicker';
import { Controller } from 'react-hook-form';

const CustomDatePicker = (props) => {
  return (
    <section>
      <label>{props.label}</label>
      <Controller
        control={props.control}
        name={props.name}
        rules={{ required: 'this is required' }}
        render={({ field }) => (
          <ReactDatePicker
            className={props.className}
            selected={field.value}
            onChange={(date) => field.onChange(date)}
            //onChangeRaw={(event) => props.validator(event.target.value)}
            placeholderText={props.placeholderText}
          />
        )}
      />
    {props.errors.startDate && <p className="error">Start date is invalid</p>}
    </section>
  );
};

export default CustomDatePicker;
