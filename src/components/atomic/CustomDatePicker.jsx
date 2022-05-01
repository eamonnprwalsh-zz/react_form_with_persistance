import DatePicker from 'react-datepicker';
import { Controller } from 'react-hook-form';

const CustomDatePicker = (props) => {
  return (
    <section>
      <label>{props.label}</label>
      <Controller
        type="date"
        control={props.control}
        name={props.name}
        rules={{ required: 'Start date is required' }}
        render={({ field }) => (
          <DatePicker
            className={props.className}
            selected={field.value}
            onChange={(val) => field.onChange(val)}
            minDate={props.minStartDate}
            placeholderText={props.placeholderText}
          />
        )}
      />
      {props.errors[props.name] && (
        <p className="error">{props.errorMessage}</p>
      )}
    </section>
  );
};

export default CustomDatePicker;
