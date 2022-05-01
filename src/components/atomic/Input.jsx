const Input = (props) => {
  return (
    <section>
      <label>{props.label}</label>
      <input
        className={props.className}
        {...props.register(props.name, {
          required: props.required,
          validate: props.validator,
        })}
        placeholder={props.placeholderText}
      />
      {props.errors.age && <p className="error">Age is invalid</p>}
    </section>
  );
};

export default Input;
 