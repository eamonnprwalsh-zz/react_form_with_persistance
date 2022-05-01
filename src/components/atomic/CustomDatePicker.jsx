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
        rules={{ required: true }}
        render={({ field }) => (
          <DatePicker
            className={props.className}
            wrapperClassName="date-picker"
            selected={field.value}
            onChange={(date) => field.onChange(date)}
            minDate={props.minStartDate}
            placeholderText={props.placeholderText}
          />
        )}
      />
    {props.errors[props.name] && <p className="error">{props.errorMessage}</p>}
    </section>
  );
};

export default CustomDatePicker;
