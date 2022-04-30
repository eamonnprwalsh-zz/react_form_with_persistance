const Input = (props) => {
  return (
    <section>
      <label>{props.label}</label>
      <input
        {...props.register(props.name)}
        placeholder={props.placeholderText}
        control={props.control}
        className={props.className}
      />
    </section>
  );
};

export default Input;
