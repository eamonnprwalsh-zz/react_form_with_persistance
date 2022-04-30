import ReactDatePicker from 'react-datepicker';
import { Controller } from 'react-hook-form';
const CustomDatePicker = (props) => {
  return (
    <section>
      <label>{props.label}</label>
      <Controller
        control={props.control}
        name={props.name}
        render={({ field }) => (
          <ReactDatePicker
            placeholderText={props.placeholderText}
            onChange={(date) => field.onChange(date)}
            selected={field.value}
            className={props.className}
          />
        )}
      />
    </section>
  );
};

export default CustomDatePicker;
